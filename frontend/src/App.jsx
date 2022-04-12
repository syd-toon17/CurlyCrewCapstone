// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect, Component } from "react";
import axios from "axios";
import { api_key } from "./localsettings";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('lLWEXRAnQd0'); // this is coming from the user clicking on thumbnail
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
async function getSearchResults(searchTerm='bob ross'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${api_key}`);
  console.log(response.data.items)
 
  setSearchResults(response.data.items)
}

async function getRelatedVideos(id){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&part=snippet&key=${api_key}`);
  console.log(response.data.items)
  // setCurrentVideoId(response.data.items[0].id.videoId)
  // setCurrentVideoDescription(response.data.items[0].snippet.description)
  // setCurrentVideoTitle(response.data.items[0].snippet.title)
  setRelatedVideos(response.data.items)
}

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
