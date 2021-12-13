import React, { Component } from "react"
import { Form, Col, Row, ToggleButton, ButtonGroup, Container } from "react-bootstrap"

export default class Application extends Component {
    state = {
        sex: 0,
        age: "",
        height: "",
        weight: "",
        level: 0
    };

    render() {
        return (
            <>
                <div className="bg-digital">
                    <Container className="py-5 text-white">
                        <h1>Application</h1>
                        <h1 className="text-primary">Input your data</h1>
                    </Container>
                </div>
                <Container>
                    <Row className="justify-content-between">
                        <Col className="bg-body rounded py-3">
                            <Row className="mb-3">
                                <h4 className="text-muted">Gender</h4>
                                <ButtonGroup>
                                    {[
                                        { name: 'MALE', value: 5 },
                                        { name: 'FEMALE', value: -161 }
                                    ].map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant="outline-primary"
                                            name="radio"
                                            value={radio.value}
                                            checked={this.state.sex === radio.value}
                                            onChange={(e) => this.setState(e.currentTarget.value)}
                                            onClick={() => this.setState({ sex: radio.value })}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <h4 className="text-muted">Age</h4>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter age"
                                            value={this.state.age}
                                            onChange={e => this.setState({
                                                age: e.target.value
                                            })}
                                        />
                                        <Form.Text className="text-muted">
                                            Enter your age in years into the box.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <h4 className="text-muted">Height</h4>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter height"
                                            value={this.state.height}
                                            onChange={e => this.setState({ height: e.target.value })}
                                        />
                                        <Form.Text className="text-muted">
                                            Enter your height in centimeters into the window.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <h4 className="text-muted">Weight</h4>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter weight"
                                            value={this.state.weight}
                                            onChange={e => this.setState({ weight: e.target.value })}
                                        />
                                        <Form.Text className="text-muted">
                                            Enter your weight in kilograms into the box.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3">
                                    <h4 className="text-muted">Physical Activity Level</h4>
                                    <Form.Check
                                        type="radio"
                                        label="Low"
                                        name="level"
                                        onChange={() => this.setState({ level: 1.2 })}
                                    />
                                    <Form.Text className="text-muted">
                                        Sedentary work and no physical activity.
                                    </Form.Text>

                                    <Form.Check
                                        type="radio"
                                        label="Minimum"
                                        name="level"
                                        onChange={() => this.setState({ level: 1.375 })}
                                    />
                                    <Form.Text className="text-muted">
                                        Rare, irregular exercise, everyday activity.
                                    </Form.Text>

                                    <Form.Check
                                        type="radio"
                                        label="Average"
                                        name="level"
                                        onChange={() => this.setState({ level: 1.55 })}
                                    />
                                    <Form.Text className="text-muted">
                                        Workout in the gym 3-5 times a week.
                                    </Form.Text>

                                    <Form.Check
                                        type="radio"
                                        label="High"
                                        name="level"
                                        onChange={() => this.setState({ level: 1.725 })}
                                    />
                                    <Form.Text className="text-muted">
                                        Workout in the gym 6-7 times a week.
                                    </Form.Text>

                                    <Form.Check
                                        type="radio"
                                        label="Very High"
                                        name="level"
                                        onChange={() => this.setState({ level: 1.9 })}
                                    />
                                    <Form.Text className="text-muted">
                                        6+ workouts per week and physical work.
                                    </Form.Text>
                                </Form.Group>
                            </Row>
                        </Col>

                        <Col className="bg-body rounded py-3 text-center">
                            <h3>How many calories do you need per day:</h3>
                            <h4>To don't change weight:{Math.round((10 * this.state.weight + 6.25 * this.state.height -
                                5 * this.state.age + this.state.sex) * this.state.level)}</h4>
                            <h4>To lose weight: {Math.round(((10 * this.state.weight + 6.25 * this.state.height -
                                5 * this.state.age + this.state.sex) * this.state.level) * 0.8)}</h4>
                            <h4>To lose weight
                                quickly: {Math.round(((10 * this.state.weight + 6.25 * this.state.height -
                                    5 * this.state.age + this.state.sex) * this.state.level) * 0.6)}</h4>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}