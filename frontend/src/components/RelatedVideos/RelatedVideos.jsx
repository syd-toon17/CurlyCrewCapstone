import React from 'react';

const RelatedVideos = (props) =>{

    const handleClick = (event, id, title, description) =>{
        event.preventDefault();
        props.changeCurrentVid(id);
        console.log(id, title, description)
    }


return (
    <div>
        <div className="container">
            <h1>Here are some videos related to your selection!</h1>
            {console.log('RELATED VIDS',props.relatedVideos)}
        </div>
        <div>   
            <table> 
                <tbody>
                {
                props.relatedVideos.map((currentVideo, index) => {
                    if(currentVideo.snippet){
                        return(

                        <tr key={index}>
                            <td>{currentVideo.snippet.title}</td>
                            <input type="image" src={currentVideo.snippet.thumbnails.medium.url} 
                            onClick={(event) => handleClick(event, currentVideo.id.videoId, currentVideo.snippet.title, currentVideo.snippet.description)}
                            />
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