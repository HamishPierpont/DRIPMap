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

            {/*What to do before and after*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do before a Hurricane</h1>
                    <ul>
                        <li>Make a family communications plan.</li>
                        <li>Cover all of your home's windows, either with storm shutters or 5/8" marine plywood, cut to fit and ready to install. Tape will not prevent your windows from breaking.</li>
                        <li>Learn the elevation of your property and whether or not the area is flood prone. This will help you know if your property will be affected in the case of flooding.</li>
                        <li>Install straps or additional clips to securely fasten your roof to the frame of your home.</li>
                        <li>Reinforce your garage doors.</li>
                        <li>Unclog or clear all outdoor drains, rain gutters and downspouts.</li>
                        <li>Buy extra batteries.</li>
                        <li>Keep a full tank of gas if evacuation seems likely.</li>
                    </ul>
                </p>
                </Col>

                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do during a Hurricane</h1>
                    <ul>
                        <li>Listen to a radio or, if possible, TV for information.</li>
                        <li>Secure your home, close storm shutters and either secure your outdoor furniture or bring it inside.</li>
                        <li>If you're instructed to turn off utilities, turn your refrigerator to its coldest setting and keep the door closed.</li>
                        <li>Turn off propane tanks.</li>
                        <li>Stay indoors and away from windows and glass doors.</li>
                        <li>Close all interior doors.</li>
                        <li>Keep curtains and blinds closed.</li>
                        <li>Stay in a small interior room, closet or hallway on the lowest level of your building or home.</li>
                        <li>Fill the bathtub and other large containers with water to use for sanitary purposes such as cleaning and flushing toilets.</li>
                    </ul>
                </p>
                </Col>
            </Row>

            {/*Links and stats*/}
            <Row>
                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Hurricane Statistics</h1>
                        <ul>
                            <li>A tropical storm is classified as a hurricane once winds goes up to 74 miles per hour or higher.</li>
                            <li>A typical hurricane can dump 6 inches to a foot of rain across a region.</li>
                            <li>Most people who die in hurricanes are killed by the towering walls of sea water that comes inland.</li>
                            <li>In the Pacific Ocean, Hurricanes are generally known as typhoons. In the Indian Ocean they are called tropical cyclones.</li>
                        </ul>
                    </p>
                </Col>

                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Helpful Links</h1>
                        <ul>
                            <li><a href="https://www.mass.gov/info-details/hurricane-safety-tips#:~:text=Stay%20indoors%20and%20away%20from,or%20neighbor's%20home%20if%20necessary." target="_blank" className="linkTextBody">Massachusetts Offical Hurricane Safety Tips</a></li>
                            <li><a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/hurricane.html" target="_blank" className="linkTextBody">Red Cross' Hurricane Preparedness Review</a></li>
                            <li><a href="https://www.ready.gov/hurricanes" target="_blank" className="linkTextBody">Ready.gov Hurricane Preperation Guide</a></li>
                            <li><a href="https://www.weather.gov/safety/hurricane" target="_blank" className="linkTextBody">National Weather Service's Hurricane Safety Tips</a></li>
                            <li><a href="https://www.iii.org/fact-statistic/facts-statistics-hurricanes" target="_blank" className="linkTextBody">III's Hurricane Statistics</a></li>
                        </ul>
                    </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    );
}

export default withRouter(Hurricanes);