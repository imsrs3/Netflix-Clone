import React, { Component } from "react";
import "./Footer.css";
import YouTube from "react-youtube";
const socialPic = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/social_sprites_icons.svg";
const socialSite ={
    fb: "https://www.facebook.com/imsrs3/",
    ig: "https://www.instagram.com/imsrs3/",
    linkedIn: "https://www.linkedin.com/in/sanket-raj-singhania-860592b9",
    twitter: "https://twitter.com/imsrs3",
    youtube: "https://m.youtube.com/channel/UCMeZStN_pxPgcqmAgf5dzGw"
}
export default class Footer extends Component {
    render(){
        const opts = {
            height: '390',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: true,
            },
          };
        return (
          
            <div className="footer_div" >
                <div class="temp"><YouTube videoId="ch8pwy-V1E8" opts={opts}/></div>
                <a  href={socialSite.fb} target="_blank" rel="noopener noreferrer">
                 <div className="fb" style={{
                   backgroundImage: `url(${socialPic})`,
                 }}>
                 </div>
               </a> 
               <a  href={socialSite.ig} target="_blank" rel="noopener noreferrer">
                 <div className="ig" style={{
                   backgroundImage: `url(${socialPic})`,
                 }}>
                 </div>
               </a> 
               <a  href={socialSite.linkedIn} target="_blank" rel="noopener noreferrer">
                 <div className="linkedIn" style={{
                   backgroundImage: `url(${socialPic})`,
                 }}>
                 </div>
               </a> 
               <a  href={socialSite.twitter} target="_blank" rel="noopener noreferrer">
                 <div className="twitter" style={{
                   backgroundImage: `url(${socialPic})`,
                 }}>
                 </div>
               </a> 
               <a  href={socialSite.youtube} target="_blank" rel="noopener noreferrer">
                 <div className="youtube" style={{
                   backgroundImage: `url(${socialPic})`,
                 }}>
                 </div>
               </a>   
      <h3 className="quotes">
          <q>Creativity is something that can't be adapted by AI and Robots.</q></h3> 
          <h3 className="quotes">
          <q>World is centered around Innovation and Innovation is basically of marriage between Creativity and Practicality.</q>
              </h3>         
    </div>
        )
    }
}