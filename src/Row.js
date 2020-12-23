import React, { Component } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseURL = "https://api.themoviedb.org/3";
const pic_url ="https://image.tmdb.org/t/p/original/"
class Row extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieList : [],
            trailerUrl: '' 
        }
    }
    componentDidMount(){
        axios.get(`${baseURL}${this.props.fetchUrl}`).then(
            res => {
                const movieList = res.data.results;
                this.setState({movieList});
                console.log(movieList);
            }, error =>{
                alert("server error");
            }
        )    
    }

render () {
    const handleClick = (movie) => {
        if(this.state.trailerUrl){
            this.setState({trailerUrl : ""});
        }
        else{
            movieTrailer(movie?.name || "").then(
                (url) => {
const urlParams =new URLSearchParams(new URL(url).search);
  this.setState({trailerUrl : urlParams.get('v')}) ;
                }
            ).catch((error) => window.alert(`Sorry! Trailer URL is not available for this movie - ${movie?.title || movie?.name || movie?.original_name}. Please try other movie.`));
        }
    }
 const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
        <div className="row">
            <h2 class="row_title">{this.props.title}</h2>
            <div className="row_posters">
                {this.state.movieList.map(movie => (
                    <img onClick={()=> handleClick(movie)}
                    className={`row_poster ${this.props.isLarge && "row_largePoster"}`} key={movie.id} 
                    src={`${pic_url}${this.props.isLarge ? movie.backdrop_path : movie.poster_path}`} alt={movie.name} title={movie.title} ></img>
                ))}
            </div>
            {this.state.trailerUrl && <YouTube videoId={this.state.trailerUrl} opts={opts}/>}
            

            
        </div>
    )
}
}
export default Row;

