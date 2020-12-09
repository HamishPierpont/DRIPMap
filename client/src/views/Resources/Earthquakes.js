import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './Styles/Earthquakes.css';

function Earthquakes(props) {
    return (
        <div className="App">
            <Container fluid>
            <br></br>
            <h1 className="pageHeader">Earthquakes</h1>

            {/*Background Information*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">Background Information</h1>
                    An earthquake (also known as a quake, tremor, or temblor) is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere that creates seismic waves. Earthquakes can range in size from those that are so weak that they cannot be felt to those violent enough to propel objects and people into the air and wreak destruction across entire cities. The seismicity, or seismic activity, of an area is the frequency, type, and size of earthquakes experienced over a period. The word tremor is also used for non-earthquake seismic rumbling. <br></br> <br></br>
                    At the Earth's surface, earthquakes manifest themselves by shaking and displacing or disrupting the ground. When the epicenter of a large earthquake is located offshore, the seabed may be displaced sufficiently to cause a tsunami. Earthquakes can also trigger landslides and occasionally, volcanic activity. <br></br> <br></br>

                </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    )
}

export default withRouter(Earthquakes);