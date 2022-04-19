// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect, Component } from "react";
import axios from "axios";
import { yt_api_key, maps_api_key} from './localsettings'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import AddCommentForm from "./components/AddCommentForm/AddCommentForm";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import SalonsMap from "./components/SalonsMap/SalonsMap";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState('Xxci46F9mzI'); // this is coming from the user clicking on thumbnail
  const [currentVideoTitle, setCurrentVideoTitle] = useState(""); // same
  const [currentVideoDescription, setCurrentVideoDescription] = useState(""); // same
  const [relatedVideos, setRelatedVideos] = useState([]);
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     setStatus('Locating...');
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setStatus(null);
  //       setLat(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //     }, () => {
  //       setStatus('Unable to retrieve your location');
  //     });
  //   }
  // }
  

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
    <div className="App">
    <SearchBar getSearchResults={getSearchResults}/>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
         <HomePage />
        }
        />
      <Route
        path="/search_result"
        element={
          <SearchPage searchResults = {SearchPage} />
        }
        />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    {/* <button onClick={getLocation}>Get Location</button>
    <h1>Coordinates</h1>
    <p>{status}</p>
    {lat && <p>Latitude: {lat}</p>}
    {lng && <p>Longitude: {lng}</p>} */}
    <VideoPlayer 
    currentVideoDescription={currentVideoDescription}
    currentVideoId={currentVideoId}
    currentVideoTitle={currentVideoTitle}
    
    />
    <SalonsMap />

    
    {/* <RelatedVideos 
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
    /> */}
    <Footer />
  </div>
);
}

export default App;
