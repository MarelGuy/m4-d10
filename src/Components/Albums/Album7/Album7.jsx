import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './album7.css'

class Album5 extends Component {

    state = {
        Album: {},
    };

    componentDidMount() {
        this.fetchAlbum()
    }
    fetchAlbum = async () => {
        try {
            let res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/133427932", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "a5930d7f94msh740c649f29d4633p13125fjsn275997db5a4a",
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
                }
            });
            if (res.ok) {
                let data = await res.json();
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
                <Card className="card-body-custom text-center">
                    <Card.Img className="card-img-custom" src={Album.cover} />
                    <Card.Body>
                        <Card.Text className="margins">
                            {Album.title}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Album5
