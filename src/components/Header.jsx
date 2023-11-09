import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{color:'white',textDecoration:'none',fontSize:'30px'}}>
            <i class="fa-solid fa-video fa-beat me-3 text-warning"></i>
            {' '}
            Video Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header