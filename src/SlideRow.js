import React, { Component } from "react";
import axios from "axios";
import { Slide } from 'react-slideshow-image';
import "./SlideRow.css";
import 'react-slideshow-image/dist/styles.css';
const baseURL = "https://api.themoviedb.org/3";
const pic_url ="https://image.tmdb.org/t/p/original/"
class SlideRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            picList : [],
            
        }
    }
    componentDidMount(){
        axios.get(`${baseURL}${this.props.fetchUrl}`).then(
            res => {
                const picList = res.data.results;
                this.setState({picList});
               
            }, error =>{
                alert("server error");
            }
        )
       
        

    }
render () {


    return (
        <div className="slide-container">
            <Slide>
                {this.state.picList.map(pic => (
                    <div className="each-slide">
                        <div style={{
                           
                            backgroundImage: `url(${pic_url}${pic?.backdrop_path})`,
                            
                        }} className="slide-main-body">
                            <h1 className="pic_name">
                                {pic.name}
                                <label className="ratings">Rating: {pic.vote_average}/10</label>
                            </h1>
                        </div>
                    </div>
                ))}
            </Slide>
            
        </div>
    )
}
}
export default SlideRow;
