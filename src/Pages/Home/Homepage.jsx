import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Cards from '../../Components/Cards/Cards'
import { Container } from 'react-bootstrap'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function Homepage() {
    return (
        <>
            <Navbar />
            <Cards id="card1" />
        </>
    )
}

export default Homepage
