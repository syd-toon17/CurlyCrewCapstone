import React from 'react';
import axios from 'axios';
import AddCommentForm from '../AddCommentForm/AddCommentForm';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../utils/PrivateRoute';

const VideoPlayer = (props) => {

const videoId = props.currentVideoId
    return(
        <div>
            <h4>{props.currentVideoTitle}</h4>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${videoId}`}
  frameBorder="0"></iframe>
  <p>{props.currentVideoDescription}</p>
        <Routes>
            <Route 
            path='/add_comment'
            element={
                <PrivateRoute>
                    <AddCommentForm />
                </PrivateRoute>
            }
        />
        </Routes>
        </div>
        
    );
}


export default VideoPlayer