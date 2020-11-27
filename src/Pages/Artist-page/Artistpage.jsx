import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './artistpage.css'
import AlbumOne from '../../Components/Albums/Album1/Album1'
import AlbumTwo from '../../Components/Albums/Album2/Album2'
import AlbumThree from '../../Components/Albums/Album3/Album3'
import AlbumFour from '../../Components/Albums/Album4/Album4'
import AlbumFive from '../../Components/Albums/Album5/Album5'
import AlbumSix from '../../Components/Albums/Album6/Album6'
import AlbumSeven from '../../Components/Albums/Album7/Album7'

class Artistpage extends Component {

    state = {
        Artist: {},
    };

    componentDidMount() {
        this.fetchArtist()
    }
    fetchArtist = async () => {
        try {
            let res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/5957286", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "a5930d7f94msh740c649f29d4633p13125fjsn275997db5a4a",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            });
            if (res.ok) {
                let data = await res.json();
                console.log(data);
                console.log(typeof data);
                this.setState({ Artist: data });
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let { Artist } = this.state;
        return (
            <>
                <Container className="text-center">
                    <Jumbotron id="jbtron" fluid>
                        <Container className="text-center">
                            <h1>{Artist.name}</h1>
                            <p>Fans:{Artist.nb_fan} | Albums: {Artist.nb_album}</p>
                        </Container>
                    </Jumbotron>
                    <h2 >Albums:</h2>
                    <Row id="albumss">
                        <Col>
                            <AlbumOne />
                        </Col>
                        <Col>
                            <AlbumTwo />
                        </Col>
                        <Col>
                            <AlbumThree />
                        </Col>
                        <Col>
                            <AlbumFour />
                        </Col>
                        <Col>
                            <AlbumFive />
                        </Col>
                        <Col>
                            <AlbumSix />
                        </Col>
                        <Col>
                            <AlbumSeven />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}




export default withRouter(Artistpage)
