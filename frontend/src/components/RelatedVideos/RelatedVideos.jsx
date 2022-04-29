import React from 'react';
import "./RelatedVideos.css"

const RelatedVideos = (props) =>{

    const handleClick = (event, id, title, description) =>{
        event.preventDefault();
        props.changeCurrentVid(id);
        console.log(id, title, description)
    }


return (
    <div>
        <div className="container">
            <h2>Related Videos</h2>
        </div>
        <div className='thumbnails'>   
            <table> 
                <tbody>
                {
                props.relatedVideos.map((currentVideo, index) => {
                    if(currentVideo.snippet){
                        return(

                        <tr key={index}>
                            <td><input type="image" src={currentVideo.snippet.thumbnails.default.url} 
                            onClick={(event) => handleClick(event, currentVideo.id.videoId, currentVideo.snippet.title, currentVideo.snippet.description)}
                            />
                            </td>
                            <td><div className='related-info'>{currentVideo.snippet.title}</div></td>
                        </tr>
                    )
                    }
                    else{
                        return null
                    }
                })}
                </tbody>
            </table>

        </div>
    </div>
    );
};
    


export default RelatedVideos