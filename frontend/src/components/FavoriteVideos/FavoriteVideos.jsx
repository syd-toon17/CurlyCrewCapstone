import React, { useState } from 'react';
import "./FavoriteVideo.css"

const FavoriteVideos = (props) => {
console.log(props.parentFavoriteVideo)
    return ( 
    <tr>
        {/* <td>{props.parentFavoriteVideo.user.username}</td> */}
        <td>{props.parentFavoriteVideo.video_id}</td>   
    </tr>
     );
}
 
export default FavoriteVideos;