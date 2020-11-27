/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Image } from 'react-bootstrap'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <>

            <Nav className="flex-column d-none d-md-block" id="side-bar">
                <Nav.Item>
                    <Nav.Link>
                        <Image src="https://i.ibb.co/hCMKPnL/spotify-logo-white.png" alt="spotify logo" fluid width="200vw" />
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><svg width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-house-door mr-3 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"></path>
                        <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                    </svg>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><svg width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-search mr-3 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path>
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path>
                    </svg>Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><svg width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-bar-chart-line mr-3 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"></path>
                    </svg>Your Library</Nav.Link>
                </Nav.Item>
                <li className="playlist nav-item">
                    <p className="ml-3 mt-4">PLAYLISTS</p>
                </li>
                <Nav.Item>
                    <Nav.Link><svg width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-square-fill mr-3 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                    </svg>Create Playlist</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><svg width="1.5em" height="2em" viewBox="0 0 16 16" className="bi bi-suit-heart-fill mr-3 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                    </svg>Liked Songs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Button className="btn-sign">SIGN UP</Button></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Button className="btn-login">LOGIN</Button></Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}
