
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigativeByUrl = useNavigate();

  return (
    <>

    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
      <Col></Col>
      <Col lg={5}>
        <h3 className='mb-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo rerum pariatur, nihil rem corrupti ratione magnam ullam sint iure adipisci doloribus? Fugiat animi minus odio dolor veniam quod porro odit qui suscipit sunt exercitationem in numquam accusantium fuga quos quasi et non eveniet harum, nemo ex, aliquid nisi cupiditate! Error eum atque, aliquam debitis maxime voluptas cupiditate quam quia!</p>
        <button onClick={() => {navigativeByUrl('/home')}} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>
      <Col></Col>
    </Row>

    <div className='container mb-5 mt-5 d-flex justify-content-center align-items-center flex-column'>
      <h3>Features</h3>
      <div className='cards d-flex justify-content-evenly align-items-center w-100 mt-5 mb-5'>
      <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{width:'100%'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          .
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorised Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          .
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          .
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-3 d-flex align-items-center justify-content-between w-100'>
      <div className="col-lg-5">
        <h3>Simple Fast And Powerful</h3>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolore alias aperiam, commodi sed fugit rerum quibusdam quasi a rem, illum, enim ipsum similique repudiandae illo sequi impedit iusto minus!</p>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolore alias aperiam, commodi sed fugit rerum quibusdam quasi a rem, illum, enim ipsum similique repudiandae illo sequi impedit iusto minus!</p>
        <p><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dolore alias aperiam, commodi sed fugit rerum quibusdam quasi a rem, illum, enim ipsum similique repudiandae illo sequi impedit iusto minus!</p>
      </div>
      <div className="col-lg-5">
      <iframe width="100%" height="370px" src="https://www.youtube.com/embed/WWr9086eWtY?si=-tPkDLZHwqOUPLFJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>

    </>
  )
}

export default LandingPage