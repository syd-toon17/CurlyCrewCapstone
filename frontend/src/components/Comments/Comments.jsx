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
    <table className='comment-table'>
        <tr>
            <td>{props.parentComment.user.username}</td>
            <td>{props.parentComment.text}</td>  
        </tr>
    </table>
     );
}
 
export default Comments;
