import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const ProfilePage = (props) =>{

  const [user,token] = useAuth()
  GetUserInformation()
  async function GetUserInformation(){
    try {
        let response = await axios.get(`http://127.0.0.1:8000/api/curlycrew/user/${user.id}/`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        console.log(response)
    } catch (error) {
        console.log(token)
        console.log(error.message)
    }
}

    function SelfOrOther() {
      const [show, setShow] = useState(false);
      const [showOther, setShowOther] = useState(false);
      const [curlType, setCurlType] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const handleCloseOther = () => setShowOther(false);
      const handleShowOther = () => setShowOther(true);

      const saveChanges = () => {
        const userData = {
          user: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          curl_type: curlType,
          self_or_other: 'self',
        
        }
        const response = axios.put(`http://127.0.0.1:8000/api/curlycrew/edit_user/${user.id}/`, userData,{
          headers: {
            Authorization: 'Bearer ' + token
        }
        })
        handleClose()
      };

      const saveDependancies = () => {
        const userData = {
          user: user.id,
          first_name: firstName,
          last_name: lastName,
          curl_type: curlType,
          self_or_other: 'other',
        
        }
        const response = axios.put(`http://127.0.0.1:8000/api/curlycrew/edit_user/${user.id}/`, userData,{
          headers: {
            Authorization: 'Bearer ' + token
        }
        })
        handleCloseOther()
      }

        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Self
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>What is Your Curl Type?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Curl Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Curl Type"
                      value={curlType}
                      onChange={(event) => setCurlType(event.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          
            <Button variant="primary" onClick={handleShowOther}>
              Other
            </Button>
      
            <Modal show={showOther} onHide={handleCloseOther}>
              <Modal.Header closeButton>
                <Modal.Title>Who Are You Adding to Your Profile?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Curl Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Curl Type"
                      value={curlType}
                      onChange={(event) => setCurlType(event.target.value)}
                      autoFocus
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseOther}>
                  Close
                </Button>
                <Button variant="primary" onClick={saveDependancies}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
        </>
        
      );
    }
      
      return(
        <>
      <SelfOrOther />
      {user.first_name}
      {user.last_name}
      {user.curl_type}
      {user.username}
      {user.email}
      </>
      );
    
};

export default ProfilePage