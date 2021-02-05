import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

class Albumpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: {}
        };
    }
    componentDidMount() {
        let { albumId } = this.props.match.params;
        this.fetchAlbum(albumId)
    }
    fetchAlbum = async (albumId) => {

        await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "a5930d7f94msh740c649f29d4633p13125fjsn275997db5a4a",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
            .then(async (res) => {
                return await res.json()
            })
            .then(album => {
                this.setState({ album })
            });
    }
    render() {
        console.log(this.state.album)
        return (
            <Row>
                <Col>
                    <h2>Album name: {this.state.album.title}</h2>
                    {/* <h3>Artist: {this.state.album.artist.name}</h3> */}
                    <h6>Track List:</h6>
                    <ul>
                        {/* {this.state.album.tracks.data[0] ? (this.state.album.tracks.data.map(track => <li>{track.title}</li>)) : (<h4>its not working</h4>)} */}
                    </ul>
                </Col>
            </Row>
        )
    }
}


export default withRouter(Albumpage)
