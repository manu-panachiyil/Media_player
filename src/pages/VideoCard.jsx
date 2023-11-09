
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import { addToHistory, deleteVideo } from '../services/allAPI';


function VideoCard({displayVideo , setDeleteVideoStatus}) {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  
  const handleShow = async() => {
    setShow(true);
    
    const {caption , embedLink} = displayVideo
    const today = new Date

    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timeStamp);

    let videoDetails = {
      caption,
      embedLink,
      timeStamp
    }
    await addToHistory(videoDetails)
  }

  const removeVideo = async(id) => {
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  const dragStated = (e,id) =>{
    console.log(`cardno : ${id} started dragging ${e.target}`);
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <div>
        <Card style={{ width: '100%',height:'320px' }} draggable onDragStart={(e) => dragStated(e,displayVideo?.id)}>
      <Card.Img variant="top" height={'250px'} onClick={handleShow} src={displayVideo.url} alt='no img'/>
      <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-center'>
        <h6 className='fs-6'> {displayVideo.caption}</h6>
        <button onClick={() => removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button> 
       </Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {displayVideo.caption}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${displayVideo.embedLink}?autoplay=1`} title={`${displayVideo.caption}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default VideoCard