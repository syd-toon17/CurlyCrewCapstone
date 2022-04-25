import React, { useState } from 'react';

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
    <tr>
        <td>{props.parentComment.user.username}</td>
        <td>{props.parentComment.text}</td>  
         
        {/* <td><button type='react' className={`fa fa-thumbs-${typeOfLike}`} onClick={handleLike}></button></td> */}
    </tr>
     );
}
 
export default Comments;
