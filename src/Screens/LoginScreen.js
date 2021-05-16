import React, { useState } from 'react'
import './LoginScreen.css'
import logo from '../logo.png';
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen-bg">
                <img src={logo} alt="" className="loginScreen-logo" />
                {!signIn && (
                    <button type="button" className="signIn-btn" onClick={()=>{ setSignIn(true)}}>Sign In</button>
                )}

                <div className="login-gradient">     
                </div>
                <div className="loginScreen-body">
                    {signIn ? (
                        <SignUpScreen />
                    ):(
                        <>
                           <h1>Unlimited movies, TV shows and more.</h1>
                           <h2>Watch anywhere. Cancel anytime.</h2>
                           <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                           <div className="login-input">
                            <form>
                              <input type='email' placeholder="Email Address" />
                                 <button className="get-started" onClick={()=>{ setSignIn(true)}}>Get Started</button>
                            </form>
                           </div>
                       </>
)}
                   
               
                   </div>
            </div>
        </div>
    )
}

export default LoginScreen
