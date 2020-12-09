import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './Styles/Hurricanes.css';

function Hurricanes(props) {
    return (
        <div className="App">
            <Container fluid>
            <br></br>
            <h1 className="pageHeader">Hurricanes</h1>

            {/*Background Information*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">Background Information</h1>
                    Hurricanes, known generically as tropical cyclones, are low-pressure systems with organized thunderstorm activity that form over tropical or subtropical waters. They gain their energy from warm ocean waters.<br></br><br></br>
                    As storm systems strengthen into hurricanes, the surface winds move continuously in a circular motion. Meteorologists refer to this pattern as “closed circulation." The direction of circulation is different depending on where the storm is located: it is counterclockwise in the Northern hemisphere and clockwise in the Southern hemisphere. <br></br><br></br>
                    These rotating winds lead to the development of the characteristic “eye” of the hurricane, the calm, clear center of the storm. The eye is surrounded by the eyewall, where winds are strongest. Major hurricanes have winds of at least 111 mph and can reach speeds of over 180 mph, with gusts of 200 mph.  <br></br><br></br>
                </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    );
}

export default withRouter(Hurricanes);