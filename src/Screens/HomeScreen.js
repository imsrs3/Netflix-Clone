import React from 'react'
import './HomeScreen.css'
import Row from "../Row";
import Banner from "../Banner";
import SlideRow from "../SlideRow";
import requests from "../requests";
import Footer from "../Footer";
import Nav from "../Nav";
function HomeScreen() {
    return (
        <div className="home-screen">
            <Nav />
      <Banner />
     
     <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
     <SlideRow fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Footer />
        </div>
    )
}

export default HomeScreen
