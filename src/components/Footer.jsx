
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column w-100'>
      <div className="footer d-flex align-items-center justify-content-evenly w-100">
        <div className="website" style={{width:'400px'}}>
          <h5 className='mb-3'><i class="fa-solid fa-video fa-beat me-3 text-warning"></i>
            {' '}
            Video Player</h5>
            <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet maxime tempore provident at, nemo eaque ut voluptatum iure consectetur sunt. Eius omnis officia fuga facere libero quam tempore itaque veritatis?</h6>
        </div>
        <div className="links d-flex flex-column">
          <h5 className='mb-3'>Links</h5>
          <Link to={'/'} style={{color:'white',textDecoration:'none'}}>Landing Page</Link>
          <Link to={'/home'} style={{color:'white',textDecoration:'none'}}>Home Page</Link>
          <Link to={'/watch-history'} style={{color:'white',textDecoration:'none'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h5 className='mb-3'>Guides</h5>
          <Link to={'/'} style={{color:'white',textDecoration:'none'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{color:'white',textDecoration:'none'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{color:'white',textDecoration:'none'}}>Bootstrap Watch</Link>
        </div>
        <div className="contacts">
        <h5 className='mb-3'>Contact Us</h5>
          <div className='d-flex mb-3'>
            <input type="text" className='form-control' placeholder='Enter your email' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2xl"></i></Link>
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-brands fa-whatsapp fa-2xl"></i></Link>
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-brands fa-linkedin fa-2xl"></i></Link>
            <Link to={'/'} style={{color:'white',textDecoration:'none'}}><i class="fa-brands fa-twitter fa-2xl"></i></Link>
          </div>
        </div>
      </div>

    <p className='mt-5 fs-6'>Copyright &copy; mediatek Dimensity Built with React.</p>
    </div>
  )
}

export default Footer