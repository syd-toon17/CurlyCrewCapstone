import React, { useState } from 'react';
import "./Comments.css"

const Comments = (props) => {

    // const [typeOfLike, setTypeOfLike]= useState('up');
    // function handleLike(event) {
    //     if (typeOfLike === 'down') {
    //         setTypeOfLike('up')
    //     }
    //     else{
    //          setTypeOfLike('down')
    //     }
    // }
console.log(props.parentComment)
    return ( 
        <tr className='comment-table'>
            <td>{props.parentComment.user.username}</td>
            <td><div className='comment-text'>{props.parentComment.text}</div></td>  
        </tr>
     );
}
 
export default Comments;
