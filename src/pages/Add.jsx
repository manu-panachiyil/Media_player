import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { uploadAllVideo } from "../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {

  const [video, setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
 // https://www.youtube.com/watch?v=DjLs9fX5CFk
 // https://www.youtube.com/embed/DjLs9fX5CFk//https://www.youtube.com/embed/Q_YhZb23zBs

  const embedVideoLink =(e) => {
    const {value} = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
  }

  const handleUpload = async () => {
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      toast.warning('Please fill the form Completely')
    }
    else{
      const response = await uploadAllVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.caption} is added successfully`)

        //to change the value of uploadvideostatus
        setUploadVideoStatus(response.data)

        handleClose();
      }
      else{
      console.log(response);
      toast.error('Something went wrong..Try again later')
      }
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="mb-5 mt-5 ms-5">
        <h5>
          Uplaoad New Video
          <button onClick={handleShow} className="btn btn-transparent">
            <i class="fa-solid fa-cloud-arrow-up fs-5"></i>
          </button>
        </h5>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="fa-solid fa-film me-2 text-warning"></i>Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary p-3 rounded">
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control  onChange={(e) => setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e) => setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e) => setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Image URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={embedVideoLink} type="text" placeholder="Enter Youtube Video Link" />
            </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Add;
