import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './Styles/Wildfires.css';

function Fires(props) {
    return (
        <div className="App">
            <Container fluid>
            <br></br>
            <h1 className="pageHeader">Wildfires</h1>

            {/*Background Information*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">Background Information</h1>
                    Wildfires are fires that burn out of control in a natural area, like a forest, grassland, or prairie. They often begin unnoticed and they spread quickly, can damage natural resources, destroy homes, and threaten the safety of the public and firefighters. <br></br> <br></br>
                    Humans cause most wildfires. It can be an accident, like when people do not take care of their campfire properly, burn debris, or are careless when getting rid of their cigarettes. However, it can also be on purpose, which is called arson. Lightning and lava also can also cause wildfires as these types of wildfires are more common when conditions are dry. High winds can make them spread even more quickly.<br></br> <br></br>
                    Although there are no guarantees of safety if you live in an area threatened by a wildfire, you can take actions to protect yourself. You should have a wildfire plan as being prepared can help reduce fear, anxiety, and losses. <br></br><br></br> 
                </p>
                </Col>
            </Row>

            {/*What to do before and after*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do before a Wildfire</h1>
                    <ul>
                        <li>
                            Recognize Warnings and Alerts
                            <ul>
                                <li>Have several ways to receive alerts. Download the FEMA app and receive real-time alerts from the National Weather Service for up to five locations nationwide. Sign up for community alerts in your area and be aware of the Emergency Alert System (EAS) and Wireless Emergency Alert (WEA)- which requires no-sign up.</li>
                                <li>Pay attention to air quality alerts.</li>
                            </ul>
                        </li>

                        <li>
                            Make an Emergency Plan
                            <ul>
                                <li>Make sure everyone in your household knows and understands what to do if you need to quickly evacuate.</li>
                            </ul>
                        </li>

                    </ul>
                </p>
                </Col>

                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do during a Wildfire</h1>
                    <ul>
                        <li>Evacuate immediately if authorities tell you to do so.</li>
                        <li>If trapped, then call 911 and give your location, but be aware that emergency response could be delayed or impossible. Turn on lights to help rescuers find you.</li>
                        <li>Use an N95 mask to protect yourself from smoke inhalation.</li>
                        <li>Pay attention to emergency alerts and notifications for information and instructions.</li>
                        <li>Response could be delayed or impossible. Turn on lights to help rescuers find you.</li>
                        <li>Pay attention to any health symptoms if you have asthma, COPD, heart disease, or are pregnant. If you are sick and need medical attention, contact your healthcare provider for further care instructions and shelter in place, if possible. If you are experiencing a medical emergency, call 9-1-1.</li>
                    </ul>
                </p>
                </Col>
            </Row>

            {/*Links and stats*/}
            <Row>
                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Wildfire Statistics</h1>
                        <ul>
                            <li>An average of 1.2 million acres of U.S. woodland burn every year.</li>
                            <li>Lightning strikes the earth over 100,000 times a day. 10 to 20% of these lightning strikes can cause fire.</li>
                            <li>90% of all wildfires are started by humans.</li>
                            <li>California is the state most associated with wildfires and, in fact, eight of the 10 most costly wildfires in the U.S. have occurred there.</li>
                        </ul>
                    </p>
                </Col>

                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Helpful Links</h1>
                        <ul>
                            <li><a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html" target="_blank" className="linkTextBody">Red Cross Wildfire Safety</a></li>
                            <li><a href="https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Wildfire/Wildfire-safety-tips" target="_blank" className="linkTextBody">National Fire Protection Association Wildfire Preparedness Tips</a></li>
                            <li><a href="https://www.usfa.fema.gov/prevention/outreach/wildfire.html" target="_blank" className="linkTextBody">U.S. Fire Administration Outreach Materials</a></li>
                            <li><a href="https://www.pge.com/en_US/safety/emergency-preparedness/natural-disaster/wildfires/wildfire-safety.page?WT.mc_id=Vanity_wildfiresafety" target="_blank" className="linkTextBody">PG&E Wildfire Safety</a></li>
                            <li><a href="https://www.readyforwildfire.org/" target="_blank" className="linkTextBody">Ready For Fire Safety Tips</a></li>
                        </ul>
                    </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    )
}

export default withRouter(Fires);