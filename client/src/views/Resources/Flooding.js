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

            </Container>  
        </div>  
    )
}

export default withRouter(Flooding);