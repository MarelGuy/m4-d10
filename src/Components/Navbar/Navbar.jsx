import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

function NavbarComponent() {
    return (
        <>
            <Navbar className="justify-content-center" id="nav">
                <Nav.Link>TRENDING</Nav.Link>
                <Nav.Link>PODCAST</Nav.Link>
                <Nav.Link>MOODS AND GENRES</Nav.Link>
                <Nav.Link>NEW RELEASES</Nav.Link>
                <Nav.Link>DISCOVER</Nav.Link>
            </Navbar>
        </>
    )
}

export default NavbarComponent
