import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <><Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand href="#home" style={{color:'white'}}>
              <i class="fa-solid fa-music fa-lg me-2"></i>
              Media Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar></>
  )
}

export default Header
