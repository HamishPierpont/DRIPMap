import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './Styles/Tornados.css';

function Tornados(props) {
    return (
        <div className="App">
            <Container fluid>
            <br></br>
            <h1 className="pageHeader">Tornados</h1>

            {/*Background Information*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">Background Information</h1>
                    A tornado is a violently rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud or, in rare cases, the base of a cumulus cloud. The windstorm is often referred to as a twister, whirlwind, or cyclone, although the word cyclone is used in meteorology to name a weather system with a low-pressure area in the center around which, from an observer looking down toward the surface of the earth, winds blow counterclockwise in the Northern Hemisphere and clockwise in the Southern. Tornadoes come in many shapes and sizes, and they are often visible in the form of a condensation funnel originating from the base of a cumulonimbus cloud, with a cloud of rotating debris and dust beneath it. Most tornadoes have wind speeds less than 110 miles per hour (180 km/h), are about 250 feet (80 m) across, and travel a few miles (several kilometers) before dissipating. The most extreme tornadoes can attain wind speeds of more than 300 miles per hour (480 km/h), are more than two miles (3 km) in diameter and stay on the ground for dozens of miles (more than 100 km). <br></br><br></br>
                    "Tornado Alley," a region that includes the area in the eastern state of South Dakota, Nebraska, Kansas, Oklahoma, northern Texas, and eastern Colorado, is often home to the most powerful and destructive of these storms. U.S. tornadoes cause 80 deaths and more than 1,500 injuries per year.<br></br><br></br>
                </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    );
}

export default withRouter(Tornados);