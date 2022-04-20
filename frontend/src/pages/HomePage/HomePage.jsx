import React from "react";
import { useEffect, useState } from "react";
import { yt_api_key } from "../../localsettings";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

import Navbar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchPage from "../SearchPage/SearchPage";
import SalonsMap from "../../components/SalonsMap/SalonsMap";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('Xxci46F9mzI'); // this is coming from the user clicking on thumbnail
  const [currentVideoTitle, setCurrentVideoTitle] = useState(""); // same
  const [currentVideoDescription, setCurrentVideoDescription] = useState(""); // same
  const [relatedVideos, setRelatedVideos] = useState([]);  

  useEffect(() => {
    getRelatedVideos(currentVideoId)
  },[])

  function changeCurrentVid (id){
    setCurrentVideoId(id)
    console.log(id)
    getRelatedVideos(id)
  }
// note is for the display search resutls Component, when you map over this data you will need to use . notation to access all of the info
// refrer to the individual objecs you are mapping over as video
// we can access the snippet data and set it equal to src={video.snippet.thumbnails.medium.url}
// each item should have a thumbnail, title and description
async function getSearchResults(searchTerm='curly hair'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${yt_api_key}`);
  console.log(response.data.items)
 
  setSearchResults(response.data.items)
}

async function getRelatedVideos(id){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&part=snippet&key=${yt_api_key}`);
  console.log(response.data.items)
  setRelatedVideos(response.data.items)
}

  return (
    <div className="HomePage">
    <VideoPlayer 
    currentVideoDescription={currentVideoDescription}
    currentVideoId={currentVideoId}
    currentVideoTitle={currentVideoTitle}
    />
    <RelatedVideos 
    currentVideoId={currentVideoId}
    relatedVideos = {relatedVideos}
    setCurrentVideoId = {setCurrentVideoId}
    setCurrentVideoTitle = {setCurrentVideoTitle}
    setCurrentVideoDescription = {setCurrentVideoDescription} 
    changeCurrentVid = {changeCurrentVid}
    />
    <SearchPage 
    searchResults={searchResults} 
    setCurrentVideoDescription ={setCurrentVideoDescription}
    setCurrentVideoId ={changeCurrentVid}
    setCurrentVideoTitle={setCurrentVideoTitle}
    />
  </div>
);
}

export default HomePage;

