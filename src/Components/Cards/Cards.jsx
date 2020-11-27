import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css'

function Cards() {
    return (
        <>
            <h2>#THROWBACKTHURSDAY</h2>
            <Row>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Italian Karaoke
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Lyricists
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Italy's Frequent Rotation
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                00's Italy
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Cocktail Hour
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                I Love my 90's Hip-Hop
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h2>CLASSIFISCHE</h2>
            <Row id="restrictMe">
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Top 50 - Italy
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Top 50 - Global
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Viral 50 - Global
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-body-custom text-center">
                        <Card.Img className="card-img-custom" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faiahouston.org%2Fmedia%2Fcontent-images%2Fplaceholder-square.jpg&f=1&nofb=1" />
                        <Card.Body>
                            <Card.Text className="margins">
                                Viral 50 - Italy
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Cards
