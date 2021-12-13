import React from "react"
import { Container } from "react-bootstrap"

export default function MifflinStJeor() {
    return (
        <>
            <div className="bg-digital">
                <Container className="py-5 text-white">
                    <h1 className="text-primary fw-bolder">Mifflin-Saint Jeor</h1>
                </Container>
            </div>

            <Container>
                <h4 className="py-5">
                    The Mifflin-Saint Geor formula, developed by a group of American dietitians led by Dr.
                    Mifflin and Saint Geor, provides the required amount of kilocalories (kcal) per day for each
                    individual person. It was introduced in 2005 and is increasingly replacing the classic
                    Harris-Benedict formula.
                </h4>
                <h4 className="pb-5">
                    There are two variants of the formula:
                    1. A simplified version of the Mifflin-San Geor formula:
                    For men: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (g) + 5;
                    For women: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (g) - 161.
                </h4>
                <h4 className="pb-5">
                    2. The modified version of the Mifflin-San Geor formula, in contrast to the simplified one, gives more
                    accurate information and takes into account the degree of physical activity of a person:<br />
                    For men: (10 x weight (kg) + 6.25 x height (cm) - 5 x age (g) + 5) x A;<br />
                    For women: (10 x weight (kg) + 6.25 x height (cm) - 5 x age (g) - 161) x A.<br />
                </h4>
                <h4 className="pb-5">
                    A is the level of human activity, it is usually distinguished by five degrees of physical activity per
                    day:<br />
                    1.2 - minimal activity, sedentary work that does not require significant physical exertion;<br />
                    1.375 - Low level of activity: vigorous exercise for at least 20 minutes, one to three times a week.
                    This can be cycling, jogging, basketball, swimming, ice skating, etc. If you do not exercise regularly,
                    but maintain a busy lifestyle that requires frequent walking for a long time, then select this ratio;<br />
                    1.55 - moderate level of activity: intensive training for at least 30-60 minutes three to four times a
                    week (any of the sports listed above);<br />
                    1.7 - heavy or laborious activity: intense exercise and sports 5-7 days a week. Labor intensive
                    activities are also suitable for this level and include construction work (brickwork, carpentry, etc.),
                    agricultural employment, etc .;<br />
                    1.9 - extreme level: includes extremely active and / or very energy-intensive activities: sports with an
                    almost daily schedule and several workouts throughout the day; very time consuming work such as
                    shoveling coal or a long working day on an assembly line. This level of activity is often very difficult
                    to achieve. It should be noted that this formula is relevant only for persons aged 13 to 80 years.
                </h4>
            </Container>
        </>
    );
}