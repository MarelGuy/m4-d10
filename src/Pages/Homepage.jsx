import React from 'react'
import Navbar from '../Components/Navbar/Navbar.jsx'
import Cards from '../Components/Cards/Cards'
import { Container } from 'react-bootstrap'



function Homepage() {
    return (
        <>
            <Container >
                <Navbar />
                <Cards />
            </Container>
        </>
    )
}

export default Homepage
