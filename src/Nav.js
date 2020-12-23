import React, { Component } from "react";
import logo from "./logo.png";
import "./Nav.css";
const gotoBottom = () => {
    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
}
class Nav extends Component{
    constructor(){
        super();
        this.state = {
            isDisplay: false,
            navList :["Home","Tv Shows", "Movies", "New & Popular","Liked"]
        }
    }
    
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                this.setState({isDisplay : true});
            }
            else{
                
                this.setState({isDisplay : false});
            }
        });
       
        return () => {
            window.removeEventListener("scroll");
        }

        
    }
    render(){
      
        return (
            <div className={`nav_row ${this.state.isDisplay && "nav_black"}`}>
             <a href="https://www.netflix.com/browse" className="netflix-link" target="_blank" rel="noopener noreferrer">   
             <img src={logo} alt="netflix logo" className="netflix-logo"></img> 
             </a>
                <div className="nav_list">
                    <ul className="nav_main">
                        {this.state.navList.map(nlist => (
                            <li key={nlist.id} className="nav-li">{nlist}</li>
                        ))}
                        
                        <li className="nav-li-contact" onClick={gotoBottom}>Contact</li>
                    </ul>
                   
                </div>    
<img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" className="avatar" alt="profile"></img>
 
            </div>
        )
    }
}
export default Nav;