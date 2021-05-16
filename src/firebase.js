import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjHyY92M_xMFfEtCpW6KmQ5ipLlkEDWx8",
    authDomain: "sanky-flix-50d72.firebaseapp.com",
    projectId: "sanky-flix-50d72",
    storageBucket: "sanky-flix-50d72.appspot.com",
    messagingSenderId: "252266681675",
    appId: "1:252266681675:web:c04bf6fbfaaea9d3a984ce",
    measurementId: "G-B4JZGWSPFN"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth} //this is explicit export 
  export default db; //this is default, only one maxm