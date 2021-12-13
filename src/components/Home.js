import React from "react"
import { Container, Button, Row, Col } from "react-bootstrap"

export default function Home() {
    return (
        <>
            <div className="bg-digital">
                <Container className="py-5 text-white">
                    <h1>Hello...</h1>
                    <h1 className="text-primary fw-bolder">I'm Calorie Calculator.</h1>
                    <h2>Find out your physical condition.</h2>

                    <div className="text-center my-5">
                        <Button variant="primary" size="lg" href="/application">Go to App</Button>
                    </div>
                </Container>
            </div>

            <div className="py-5">
                <h3 className="text-muted text-center">This Web-app was created using</h3>
                <Container className="py-5">
                    <Button variant="primary" size="lg" href="https://en.reactjs.org/" target="_blank"
                        className="mb-5">React</Button>
                    <Row>
                        <Col lg md>
                            <h2 className="text-muted">Declarative</h2>
                            <p>
                                React makes it painless to create interactive UIs. Design simple views for each state in
                                your application, and React will efficiently update and render just the right components
                                when your data changes.<br />Declarative views make your code more predictable and easier
                                to debug.
                            </p>
                        </Col>
                        <Col lg md>
                            <h2 className="text-muted">Component-Based</h2>
                            <p>
                                Build encapsulated components that manage their own state, then compose them to make
                                complex UIs.<br />Since component logic is written in JavaScript instead of templates,
                                you can easily pass rich data through your app and keep state out of the DOM.
                            </p>
                        </Col>
                        <Col lg md>
                            <h2 className="text-muted">Write Anywhere</h2>
                            <p>
                                We don’t make assumptions about the rest of your technology stack, so you can develop
                                new features in React without rewriting existing code. <br />React can also render on the
                                server using Node and power mobile apps using React Native.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Button variant="primary" size="lg" href="https://react-bootstrap.github.io/" target="_blank"
                        className="mb-5">React Bootstrap</Button>
                    <Row>
                        <Col lg md>
                            <h2 className="text-muted">Rebuilt with React</h2>
                            <p>
                                React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from
                                scratch as a true React component, without unneeded dependencies like jQuery.<br />As one
                                of the oldest React libraries, React-Bootstrap has evolved and grown alongside React,
                                making it an excellent choice as your UI foundation.
                            </p>
                        </Col>
                        <Col lg md>
                            <h2 className="text-muted">Bootstrap at its core</h2>
                            <p>
                                Built with compatibility in mind, we embrace our bootstrap core and strive to be
                                compatible with the world's largest UI ecosystem.<br />By relying entirely on the
                                Bootstrap stylesheet, React-Bootstrap just works with the thousands of Bootstrap themes
                                you already love.
                            </p>
                        </Col>
                        <Col lg md>
                            <h2 className="text-muted">Accessible by default</h2>
                            <p>
                                The React component model gives us more control over form and function of each
                                component.<br />Each component is implemented with accessibility in mind. The result is a
                                set of accessible-by-default components, over what is possible from plain Bootstrap.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}