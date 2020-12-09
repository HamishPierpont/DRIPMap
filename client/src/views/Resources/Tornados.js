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

            {/*What to do before and after*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do before a Tornado</h1>
                    <ul>
                        <li>Know your area’s tornado risk. In the U.S., the Midwest and the Southeast have a greater risk for tornadoes.</li>
                        <li>Know the signs of a tornado, including a rotating, funnel-shaped cloud; an approaching cloud of debris; or a loud roar—similar to a freight train.</li>
                        <li>Sign up for your community’s warning system.</li>
                        <li>Pay attention to weather reports. Meteorologists can predict when conditions might be right for a tornado.</li>
                        <li>Identify and practice going to a safe shelter, while following the latest social and physical-distancing and other health safety guidelines from the Centers for Disease Control and Prevention and your local health authorities, in the event of high winds, such as a safe room built using FEMA criteria or a storm shelter built to ICC 500 standards.</li>
                    </ul>
                </p>
                </Col>

                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do during a Tornado</h1>
                    <ul>
                        <li>Immediately go to a safe location that you identified.</li>
                        <li>If there is still time, try to board windows and doors with furniture.</li>
                        <li>Take additional cover by shielding your head and neck with your arms and putting materials such as furniture and blankets around you.</li>
                        <li>Listen to EAS, NOAA Weather Radio, or local alerting systems for current emergency information and instructions.</li>
                        <li>Do not try to outrun a tornado in a vehicle.</li>
                        <li>If you are in a car or outdoors and cannot get to a building, cover your head and neck with your arms and cover your body with a coat or blanket, if possible.</li>
                    </ul>
                </p>
                </Col>
            </Row>

            {/*Links and stats*/}
            <Row>
                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Tornado Statistics</h1>
                        <ul>
                            <li>In 2020 through November there were 1,212 tornadoes compared with 1,448 in the first 11 months of 2019.</li>
                            <li>The costliest U.S. catastrophe involving tornadoes, based on insured losses, occurred in April 2011. It hit Tuscaloosa, Alabama, and other areas, and cost $8.4 billion in insured damages (in 2019 dollars).</li>
                            <li>The winds of a tornado can reach speeds of up to 480km per hour – that’s strong enough to peel the roofs off houses, uproot trees and hurl heavy objects, such as cars, hundreds of metres.</li>
                        </ul>
                    </p>
                </Col>

                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Helpful Links</h1>
                        <ul>
                            <li><a href="https://www.iii.org/fact-statistic/facts-statistics-tornadoes-and-thunderstorms#:~:text=Tornado%20deaths%20in%202020%20are,in%202018%2C%20according%20to%20NOAA.&text=There%20were%2041%20direct%20fatalities,in%202018%2C%20according%20to%20NOAA." target="_blank" className="linkTextBody">III's Facts+Statistics on Tornados</a></li>
                            <li><a href="https://www.cdc.gov/nceh/features/tornadosafety/index.html#:~:text=Although%20there%20is%20no%20completely,a%20heavy%20table%20or%20workbench)." target="_blank" className="linkTextBody">CDC Tornado Safety Tips</a></li>
                            <li><a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/tornado.html" target="_blank" className="linkTextBody">Red Cross' Tornado Preparation Guide</a></li>
                            <li><a href="https://www.ready.gov/tornadoes" target="_blank" className="linkTextBody">Ready.gov's Tornado Information Sheet</a></li>
                            <li><a href="https://www.weather.gov/safety/tornado" target="_blank" className="linkTextBody">National Weather Service's Tornado Safety Guide</a></li>
                        </ul>
                    </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    );
}

export default withRouter(Tornados);