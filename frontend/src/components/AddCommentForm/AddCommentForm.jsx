import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import "./AddCommentForm.css"


const AddCommentForm = (props) => {
  let initialValues = {
    user: "",
    video_id: "",
    text: ""
};
    const [user,token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewComment)
    formData.video_id=props.currentVideoId
    formData.user=user?.id

    async function postNewComment(){
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/hairvideos/add_comment/${props.currentVideoId}/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            props.refreshComments()
        } catch (error) {
            console.log(formData)
            console.log(error.message)
        }
    }

    return (
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            {/* <label>
              User:{" "}
              <input
                type="text"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
              />
            </label> */}
            <label>
              Comment:{" "}
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
            <button>Submit Comment!</button>
          </form>
        </div>
      );
}

export default AddCommentForm