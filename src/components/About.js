import React from "react"
import { Button, Card, Carousel, Col, Container, Image, Row } from "react-bootstrap"
import EvgenyDakinov from "./img/Developers/EvgenyDakinov.jpg"
import NikitaNikitin from "./img/Developers/NikitaNikitin.jpg"
import SergeyKukharev from "./img/Developers/SergeyKukharev.jpg"
import appleImage from "./img/Carousel/apple.jpg"
import bananaImage from "./img/Carousel/banana.jpg"
import orangeImage from "./img/Carousel/orange.jpg"
import grapesImage from "./img/Carousel/grapes.jpg"
import tomatoImage from "./img/Carousel/tomato.jpg"

export default function About() {
    return (
        <>
            <div className="bg-digital">
                <Container className="py-5 text-white">
                    <h1>About Us</h1>
                    <h1 className="text-primary fw-bolder">Developers and beyond.</h1>
                    <h2>As well as information on foods for your diet.</h2>
                </Container>
            </div>

            <div className="py-5">
                <h3 className="text-muted text-center">Developers</h3>
                <Container className="py-5">
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }} className="mx-auto">
                                <Card.Img variant="top" src={EvgenyDakinov} height={250} />
                                <Card.Body>
                                    <Card.Title>Evgeny Dakinov</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" href="https://t.me/evgmay" target="_blank" rel="noreferrer">Telegram</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="mx-auto">
                                <Card.Img variant="top" src={NikitaNikitin} height={250} />
                                <Card.Body>
                                    <Card.Title>Nikita Nikitin</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" href="https://vk.com/id506370702" target="_blank" rel="noreferrer">VK page</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="mx-auto">
                                <Card.Img variant="top" src={SergeyKukharev} height={250} />
                                <Card.Body>
                                    <Card.Title>Sergey Kukharev</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" href="https://vk.com/osergeyk" target="_blank" rel="noreferrer">VK page</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5">
                <Container>
                    <Carousel variant="light" className="mx-auto">
                        {[
                            { name: "Apple", path: appleImage, size: "4 oz,", calories: 59, kJ: 249 },
                            { name: "Banana", path: bananaImage, size: "6 oz.", calories: 151, kJ: 632 },
                            { name: "Orange", path: orangeImage, size: "4 oz.", calories: 53, kJ: 222 },
                            { name: "Grapes", path: grapesImage, size: "6 oz.", calories: 59, kJ: 249 },
                            { name: "Tomato", path: tomatoImage, size: "1 cup", calories: 22, kJ: 92 },
                        ].map((Slide) => (
                            <Carousel.Item>
                                <Image fluid src={Slide.path} alt={Slide.name} />
                                <Carousel.Caption>
                                    <h5>{Slide.name}</h5>
                                    <p>Serving size: {Slide.size} | Calories: {Slide.calories} | kJ: {Slide.kJ}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </div>
        </>
    );
}