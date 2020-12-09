import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './Styles/Flooding.css';

function Flooding(props) {
    return (
        <div className="App">
            <Container fluid>
            <br></br>
            <h1 className="pageHeader">Flooding</h1>

            {/*Background Information*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">Background Information</h1>
                    A flood is an overflow of water that submerges land that is usually dry. In the sense of "flowing water", the word may also be applied to the inflow of the tide. Floods are an area of study of the discipline hydrology and are of significant concern in agriculture, civil engineering, and public health. Human changes to the environment often increase the intensity and frequency of flooding, for example land use changes such as deforestation and removal of wetlands, changes in waterway course such as with levees, and larger environmental issues such as climate change and sea level rise. <br></br><br></br>
                    Floods can also occur in rivers when the flow rate exceeds the capacity of the river channel, particularly at bends or meanders in the waterway. Floods often cause damage to homes and businesses if they are in the natural flood plains of rivers. While riverine flood damage can be eliminated by moving away from rivers and other bodies of water, people have traditionally lived and worked by rivers because the land is usually flat and fertile and because rivers provide easy travel and access to commerce and industry.<br></br><br></br>
                </p>
                </Col>
            </Row>

            {/*What to do before and after*/}
            <Row>
                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do before a Flood</h1>
                    <ul>
                        <li>Remember, if you decide to build your home in a flood plain, you should elevate and reinforce the home.</li>
                        <li>Build an emergency kit and make a family communications plan.</li>
                        <li>Elevate the furnace, water heater and electric panel in your home if you live in an area that has a high flood risk.</li>
                        <li>Consider installing "check valves" to prevent flood water from backing up into the drains of your home.</li>
                        <li>If feasible, construct barriers to stop floodwater from entering the building and seal walls in basements with waterproofing compounds.</li>
                    </ul>
                </p>
                </Col>

                <Col>
                <br></br>
                <p className="block">
                    <h1 className="blockHeader">What to do during a Flood</h1>
                    <ul>
                        <li>Listen to the radio or television for information.</li>
                        <li>Be aware that flash flooding can occur. If there is any possibility of a flash flood, move immediately to higher ground. Do not wait for instructions to move.</li>
                        <li>Be aware of stream, drainage channels, canyons and other areas known to flood suddenly. Flash floods can occur in these areas with or without typical warnings such as rain clouds or heavy rain.</li>
                        <li>If you have time, secure your home by bringing in outdoor furniture.</li>
                        <li>Turn off utilities at the main switches or valves if instructed to do so. Disconnect electrical appliances.</li>
                    </ul>
                </p>
                </Col>
            </Row>

            {/*Links and stats*/}
            <Row>
                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Flood Statistics</h1>
                        <ul>
                            <li>A flash flood can bring a wall of water as much as 10 to 15 feet high.</li>
                            <li>From 2005 to 2014, the average flood claim was $42,000, and total flood insurance claims averaged more than $3.5 billion per year.</li>
                            <li>Flooding is the No. 1 natural disaster in the United States.</li>
                            <li>In areas of high risk of flooding, your home is more likely to be damaged by flood than by fire.</li>
                        </ul>
                    </p>
                </Col>

                <Col>
                    <br></br>
                    <p className="bottomBlock">
                        <h1 className="blockHeader">Helpful Links</h1>
                        <ul>
                            <li><a href="https://www.redcross.org/about-us/our-work/disaster-relief/flood-relief.html" target="_blank" className="linkTextBody">Red Cross' Flooding Relief Website</a></li>
                            <li><a href="https://www.worldaware.com/resources/advice/what-do-during-and-after-flood" target="_blank" className="linkTextBody">WorldAware's Flood Advice</a></li>
                            <li><a href="https://www.floodsmart.gov/flood/first-prepare-for-flooding" target="_blank" className="linkTextBody">FEMA's Guide on How to Survive a Flood</a></li>
                            <li><a href="https://www.ready.gov/floods" target="_blank" className="linkTextBody">Ready.gov's Flood Preparation Plan</a></li>
                            <li><a href="https://www.houselogic.com/finances-taxes/home-insurance/what-do-first-24-hours-after-flood/" target="_blank" className="linkTextBody">House Logic's List of What to do After a Flood</a></li>
                        </ul>
                    </p>
                </Col>
            </Row>

            </Container>  
        </div>  
    )
}

export default withRouter(Flooding);