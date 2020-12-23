import React, { Component } from "react";
import axios from "axios";
import requests from "./requests";
import playButton from "./playButton.png";
import "./Banner.css";
const baseURL = "https://api.themoviedb.org/3";
const pic_url ="https://image.tmdb.org/t/p/original/"
class Banner extends Component {
    constructor(){
        super();
        this.state ={
            bannerList : []
        } 
    }
    componentDidMount(){
        axios.get(`${baseURL}${requests.fetchNetflixOriginals}`).then(
            res => {
                const bannerList = res.data.results[Math.floor(Math.random()*res.data.results.length)];
                this.setState({bannerList});
            }, error =>{
                alert("server error");
            });
    }
    truncate(str,n){
return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }
   
    render(){
        return (
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(${pic_url}${this.state.bannerList?.backdrop_path})`,
                backgroundPosition: "center center",
            }}>
                <div className="banner_contents">
                <h1 className="b-title">{this.state.bannerList?.title || this.state.bannerList?.name || this.state.bannerList?.original_name }</h1>
                <div className="banner_buttons">
                    <button type="button" className="b-btn">
                        <img src={playButton} alt="arrow" className="play-btn"></img> 
                        <span className="play-text">Play</span></button>
                    <button type="button" className="b-btn">More Info</button>
                </div>
                <h1 className="b-desc">
                    {this.truncate(this.state.bannerList?.overview,150)}
                </h1>
                </div>
                <div className="b-fade">

                </div>
            </header>
        )
    }
}
export default Banner;
