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


            </Container>  
        </div>  
    )
}

export default withRouter(Fires);