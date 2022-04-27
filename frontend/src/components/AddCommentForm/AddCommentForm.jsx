import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import "./AddCommentForm.css"

let initialValues = {
    user: "",
    video_id: "",
    text: "",
    likes: "",
    dislikes: ""
};

const AddCommentForm = (props) => {
    const [user,token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewComment)
    

    async function postNewComment(){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/hairvideos/add_comment/${props.currentVideoId}/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate("/")
        } catch (error) {
            console.log(token)
            console.log(formData)
            console.log(error.message)
        }
    }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              User:{" "}
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Text:{" "}
              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
              />
            </label>
            {/* <label>
              VideoId:{""}
              <input
                type="text"
                name="video_id"
                value={formData.video_id}
                onChange={handleInputChange}
              />
            </label> */}
            <p style={{ fontSize: "12px" }}>
              NOTE: Add your comment here!
            </p>
            <button>Submit Comment!</button>
          </form>
        </div>
      );
}

export default AddCommentForm