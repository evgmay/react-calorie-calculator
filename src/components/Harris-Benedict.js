import React, { useState } from "react"
import { Container, Button, Offcanvas } from "react-bootstrap"

export default function HarrisBenedict() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <div className="bg-digital">
                <Container className="py-5 text-white">
                    <h1 className="text-primary fw-bolder">Harris-Benedict</h1>
                </Container>
            </div>
            <Container className="py-4">
                <h4>
                    Harris-Benedict formula for calculating daily calorie intake The Harris-Benedict Formula will help you
                    understand how many calories you need each day to lose weight and maintain weight. All people are
                    different from each other and all organisms have individual characteristics, so each person needs their
                    own number of calories per day to lose weight or maintain weight. We recommend using the Harris-Benedict
                    formula to determine your daily calorie intake.<br /><br /><span className="text-primary">The confidence interval with a 95% confidence level is ±
                    213.0 kcal / day for men and ± 201.0 kcal / day for women.</span><br /><br />After completing the Harris-Benedict Daily
                    Calorie Calculations, you have an accurate figure. If your goal is to lose weight, then you need to
                    consume less calories than the final figure (but not less than 1200 kcal, as this is unhealthy). If your
                    goal is to get better, then you need to eat more than the resulting figure. To maintain weight, eat as
                    many foods as you get the total calories. In all cases, it is advisable to do at least light physical
                    exercise a couple of times a week. Please note that the Harris-Benedict formula cannot be used by very
                    fat people(the formula overestimates their actual calorie needs) and very pumped up (the formula
                    underestimates their actual needs).
                </h4>
                <Button variant="primary" onClick={handleShow} className="mt-4">More Information</Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Harris-Benedict</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <h4 className="fw-bolder mx-auto pb-3">
                            We have collected for you easy-to-understand information about this topic.
                            If you want to know more, we advise you to visit Wikipedia or other information sites.
                        </h4>
                        <Button className="outline-primary mx-auto" href="https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation">Wiki</Button>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    )
}