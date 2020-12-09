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

            {/*What to do before and after*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do before an Earthquake</h1>
                    <ul>
                        <li>Develop a family earthquake plan. Prepare yourself and your home by completing the activities on this checklist.</li>
                        <li>Decide how and where your family will reunite if separated.</li>
                        <li>Choose an out-of-area friend or relative who separated family members can call after the quake to report their whereabouts and condition.</li>
                        <li>Know the safe spots in each room: under sturdy tables, desks, or against inside walls.</li>
                        <li>Know the danger spots: windows, mirrors, hanging objects, fireplaces and tall, unsecured furniture.</li>
                        <li>Conduct practice drills. Physically place yourself in safe locations.</li>
                        <li>Learn first aid and CPR (cardiopulmonary resuscitation) from your local American Red Cross chapter or other community organization.</li>
                    </ul>
                </p>
                </Col>

                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do during an Earthquake</h1>
                    <ul>
                        <li>If indoors, stay there and take cover under a table, desk, or other sturdy furniture.</li>
                        <li>Face away from windows and glass doors.</li>
                        <li>A doorway without a door is an acceptable location in which to stand.</li>
                        <li>Lie, kneel or sit near a structurally sound interior wall or corner away from windows, brick fireplaces, glass walls, etc.</li>
                        <li>Protect your head and body from falling or flying objects.</li>
                        <li>Remain where you are until shaking stops. Think out your plan of action first, then move.</li>
                        <li>Know exit routes if in a commercial building. Take cover and don't move until the shaking stops.</li>
                        <li>Stay in the vehicle if downed power lines have fallen across it. Do not touch metal. Wait for help. You might be able to back away from lines.</li>
                    </ul>
                </p>
                </Col>
            </Row>

            {/*Links and stats*/}
            <Row>
                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Earthquake Statistics</h1>
                        <ul>
                            <li>It is estimated that there are 500,000 detectable earthquakes in the world each year. 100,000 of those can be felt, and 100 of them cause damage.</li>
                            <li>The largest recorded earthquake in the United States was a magnitude 9.2 that struck Prince William Sound, Alaska on Good Friday, March 28, 1964 UTC.</li>
                            <li>The largest recorded earthquake in the world was a magnitude 9.5 (Mw) in Chile on May 22, 1960.</li>
                        </ul>
                    </p>
                </Col>

                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Helpful Links</h1>
                        <ul>
                            <li><a href="https://www.ready.gov/earthquakes" target="_blank" className="linkTextBody">Ready.gov's Earthquake Preperation Guide</a></li>
                            <li><a href="https://www.calacademy.org/explore-science/how-to-prepare-for-an-earthquake" target="_blank" className="linkTextBody">California Academy of Sciences DIY Earthquake Preperation Manual</a></li>
                            <li><a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/earthquake.html" target="_blank" className="linkTextBody">Red Cross' Earthquake Safety Website</a></li>
                            <li><a href="https://www.cdc.gov/disasters/earthquakes/during.html" target="_blank" className="linkTextBody">CDC Earthquake Guide</a></li>
                            <li><a href="https://www.usgs.gov/natural-hazards/earthquake-hazards/science/cool-earthquake-facts?qt-science_center_objects=0#qt-science_center_objects" target="_blank" className="linkTextBody">U.S. Geological Survey Earthquake Statistics</a></li>
                        </ul>
                    </p>
                </Col>
            </Row>
            
            </Container>  
        </div>  
    )
}

export default withRouter(Earthquakes);