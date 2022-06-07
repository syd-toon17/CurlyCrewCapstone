import React from 'react';
import axios from 'axios';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../utils/PrivateRoute';
import useAuth from "../../hooks/useAuth";

const VideoPlayer = (props) => {
    const [user,token] = useAuth()
function favoriteVideo (){
    try {
        let response = axios.post(`http://127.0.0.1:8000/api/hairvideos/favorite_video/${props.currentVideoId}/${user.id}/`,{}, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }catch (error) {
        console.log(error.message)
    }
}
    
const videoId = props.currentVideoId
    return(
        <div>
            <h4>{props.currentVideoTitle}</h4>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${videoId}`}
  frameBorder="0"></iframe>
  <p>{props.currentVideoDescription}</p>
        <Routes>
            {user&&<Route 
            path='/add_comment'
            element={
                <PrivateRoute>
                    <AddCommentForm />
                </PrivateRoute>
            }
        />}
        </Routes>
        {user&&<button className='fave-button' onClick={favoriteVideo}>Favorite This Video!</button>}
        </div>
        
    );
}


export default VideoPlayer