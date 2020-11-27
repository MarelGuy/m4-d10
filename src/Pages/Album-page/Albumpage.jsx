import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'
import './albumpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Albumpage extends Component {

    state = {
        Album: {},
    };

    componentDidMount() {
        this.fetchAlbum()
    }
    fetchAlbum = async () => {
        try {
            let res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/172723872", {
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
                this.setState({ Album: data });
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let { Album } = this.state;
        return (
            <>
                <Container>
                    <Image src={Album.cover} />
                    <h1>{Album.title}</h1>

                </Container>
            </>
        )
    }
}

export default withRouter(Albumpage)
