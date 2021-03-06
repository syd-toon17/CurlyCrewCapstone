import React from "react";
import { useEffect, useState } from "react";
import { yt_api_key } from "../../localsettings";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

import axios from "axios";
import useAuth from "../../hooks/useAuth";


import SearchPage from "../SearchPage/SearchPage";
import SearchBar from "../../components/SearchBar/SearchBar";
import Navbar from "../../components/NavBar/NavBar";
import DisplayComments from "../../components/DisplayComments/DisplayComments";
import AddCommentForm from "../../components/AddCommentForm/AddCommentForm";
import "./HomePage.css"

function HomePage(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('Xxci46F9mzI'); // this is coming from the user clicking on thumbnail
  const [currentVideoTitle, setCurrentVideoTitle] = useState(""); // same
  const [currentVideoDescription, setCurrentVideoDescription] = useState(""); // same
  const [relatedVideos, setRelatedVideos] = useState([]);  
  const [comments, setComments] = useState([]);  

  useEffect(() => {
    getRelatedVideos(currentVideoId)
    getComments(currentVideoId)
  },[currentVideoId])

  function refreshComments(){
    getComments(currentVideoId)
  } 

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
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=hair ${searchTerm}&type=video&videoCategoryId=26&part=snippet&key=${yt_api_key}`);
  console.log(response.data.items)
 
  setSearchResults(response.data.items)
}

async function getRelatedVideos(id){
  try{
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&part=snippet&key=${yt_api_key}`);
    console.log(response.data.items)
    setRelatedVideos(response.data.items)
  } catch(error) {
    console.log(error)
  }
}

async function getComments(id){
  console.log(props.currentVideoId)
  console.log(id)
  try{
    let response = await axios.get(`http://127.0.0.1:8000/api/hairvideos/comment/${id}/`);
    console.log(response.data)
    setComments(response.data || [])
  } catch(error) {
    console.log(error)
  }
}

  return (
    <div className="HomePage">

      <SearchBar getSearchResults={getSearchResults}/>
      <div className="left-col">
        <div className='video-player'>
          <VideoPlayer 
          currentVideoDescription={currentVideoDescription}
          currentVideoId={currentVideoId}
          currentVideoTitle={currentVideoTitle}
          />
        </div>
        <div className="comments">
          <div className="display-comments">
            <DisplayComments parentComment={comments} />
          </div>
          <div className="comment-form">
            < AddCommentForm
            currentVideoId={currentVideoId}
            refreshComments={refreshComments}
            />
          </div>
        </div>
      </div>
      <div className="right-col">
        <div className="right-col-content">
          <div className="related-videos">
            <RelatedVideos 
            currentVideoId={currentVideoId}
            relatedVideos = {relatedVideos}
            setCurrentVideoId = {setCurrentVideoId}
            setCurrentVideoTitle = {setCurrentVideoTitle}
            setCurrentVideoDescription = {setCurrentVideoDescription} 
            changeCurrentVid = {changeCurrentVid}
            />
          </div>
        </div>
      </div>
      <div className="search-results">  
        <SearchPage 
        searchResults={searchResults} 
        setCurrentVideoDescription ={setCurrentVideoDescription}
        setCurrentVideoId ={changeCurrentVid}
        setCurrentVideoTitle={setCurrentVideoTitle}
    />
    </div>
  </div>
);
}

export default HomePage;

