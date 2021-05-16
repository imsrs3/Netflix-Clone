import React, { useEffect} from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./Features/userSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./firebase";
const LazyLoginScreen = React.lazy(()=> import("./Screens/LoginScreen"));
const LazyHomeScreen = React.lazy(()=> import("./Screens/HomeScreen"));
function App() {
  const user = useSelector(selectUser);
  const  dispatch = useDispatch();
   useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
       if(userAuth){
         //LOGGED IN
         dispatch(login({
           uid: userAuth.uid,
           email: userAuth.email
         }))
       }
       else{
         //log out
         dispatch(logout);
       }
     });
     return unsubscribe;
   }, [dispatch])
  return (
    <div className="app">
      <Router> 
      <React.Suspense fallback="Loading...">
   {!user ? (
           <LazyLoginScreen /> 
  ):(
    <Switch>
    <Route exact path="/">
 <LazyHomeScreen  />
 </Route>
     
 </Switch>
  )}
 
 
 </React.Suspense> 
    </Router>
      </div>
  );
}

export default App;
