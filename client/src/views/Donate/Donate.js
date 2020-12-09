import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Donate.css';

function Donate() {
    return (
        <div className="App">
        <Container fluid>
          <br></br>
          <h1 className="pageHeader">Donate to Disaster Relief</h1>
          <h6 className="subheading"> 
            This page contains links to organizations that are helping people in need 
            or suffering from natural disasters. Any donation to any of these non-profit organizations
            helps. The last card contains a link to the offical DRIPMaP venmo where you can donate 
            to us personally to keep DRIPMaP going!  
          </h6>

          <Row>

            {/*Organization 1*/}
            <Col>
              <br></br>
              <p className="orgs">
                <p className="linkHead">
                  <a
                    href="https://www.redcross.org/about-us/our-work/disaster-relief/wildfire-relief.html"
                    target="_blank"
                    className="linkText"
                  >
                    American Red Cross Wildfire Relief
                  </a>                 
                    <img
                      src="https://s3.amazonaws.com/images.hamlethub.com/hh20mediafolder/1076/201604/American-Red-Cross-logo2.jpg"
                      alt="Red Cross Logo"
                      width="152"
                      height="91.2"
                      className="logo1"
                    ></img>
                </p>
                The American Red Cross (ARC), also known as The American
                National Red Cross, is a humanitarian organization that provides emergency assistance, disaster relief,
                and disaster preparedness education in the United States. One of the key disasters they're
                dealing with right now is wildfires, especially in California where wildfires have burned
                4.3 million acres of land. A donation here would go to local fire shelters, firefighter
                equipment, and rebuilding forests in areas that need it the most. 
              </p>
              <br></br>
            </Col>

            {/*Organization 2*/}
            <Col>
              <br></br>
              <p className="orgs">
                <p className="linkHead">
                  <a
                    href="https://www.unicefusa.org/mission/emergencies/hurricanes"
                    target="_blank"
                    className="linkText"
                  >
                    UNICEF Hurricane Relief Effort
                  </a>                 
                    <img
                      src="https://www.acted.org/wp-content/uploads/2018/03/unicef-logo-whiteonblue.jpg"
                      alt="UNICEF logo"
                      width="152"
                      height="91.2"
                      className="logo2"
                    ></img>
                </p>
                After a hurricane hits, especially in poor and undeveloped countries, UNICEF's emergency response teams 
                bring lifesaving relief: water purification tablets, vaccines and nutrition supplements for
                children and nursing mothers; tents and temporary shelters for families; school kits; counseling
                to help children deal with trauma and other services. A donation here would support UNICEF's emergency
                preparation, response capabilities, and rebuilding efforts in vulnerable communities worldwide.
              </p>
              <br></br>
            </Col>

          </Row>

          <Row>

            {/*Organization 3*/}
            <Col>
              <br></br>
              <p className="orgs">
                <p className="linkHead">
                  <a
                    href="https://www.directrelief.org/emergency/tornado/"
                    target="_blank"
                    className="linkText"
                  >
                    DirectRelief Tornado Fund
                  </a>                 
                    <img
                      src="https://mma.prnewswire.com/media/487604/Direct_Relief_logo.jpg?p=facebook"
                      alt="DirectRelief Logo"
                      width="152"
                      height="91.2"
                      className="logo3"
                    ></img>
                </p>
                There have been over 1200 tornadoes in 2020 alone and they often strike with little to no 
                warning, making evacuations and preperation difficult. During these tornadoes,
                people who depend on medications for chronic conditions – primarily
                diabetes, asthma, and hypertension – are particularly at risk if their medications are
                unavailable. This is where DirectRelief comes in. A donation to DirectRelief’s tornado
                fund provides lifesaving medicine, shelter, and food to those affected by tornados worldwide.
              </p>
              <br></br>
            </Col>

            {/*Organization 4*/}
            <Col>
              <br></br>
              <p className="orgs">
                <p className="linkHead">
                  <a
                    href="https://www.allhandsandhearts.org/programs/puerto-rico-hurricane-relief/"
                    target="_blank"
                    className="linkText"
                  >
                    AHH Puerto Rico Earthquake Relief
                  </a>                 
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/c/c2/All_Hands_And_Hearts_-_Smart_Response_new_logo_%282018%29.png"
                      alt="AHH symbol"
                      width="90"
                      height="90"
                      className="logo4"
                    ></img>
                </p>
                In September 2017, Hurricane Irma made landfall in Puerto Rico with the strongest winds the 
                island has ever seen. Not long after, Hurricane Maria’s ferocious 155 mph winds struck the 
                island, leaving a trail of destruction. Maria first made landfall over the municipality of 
                Yabucoa, impacting more than 37,000 residents; this area bore the strongest brunt of the storm,
                where hundreds of homes still need basic roof repairs today. A donation to the All Hands and
                Hearts Association would provide sheltering, food, and medicine to the people of Puerto Rico.
              </p>
              <br></br>
            </Col>

          </Row>

          <Row>

            {/*Organization 5*/}
            <Col>
              <br></br>
              <p className="orgs">
                <p className="linkHead">
                  <a
                    href="https://www.networkforgood.org/topics/animal_environ/floods/"
                    target="_blank"
                    className="linkText"
                  >
                    Network For Good Flooding Fund
                  </a>                 
                    <img
                      src="https://grantstation.com/sites/default/files/inline-images/NfG%20Logo-min.png"
                      alt="Network for Good image"
                      width="91"
                      height="91"
                      className="logo5"
                    ></img>
                </p>
                Floods are the most common and widespread of all natural disasters — except fire. Many communities
                have experienced some kind of flooding, after spring rains, heavy thunderstorms, or winter snow thaws,
                but they can have extremely damaging results. One of the biggest places in the world hit by flooding
                every year is India as they experience a monsoon season every year that brings heavy rain and flooding
                to many Indian cities. Donating to the Network of Good would provide life saving shelter, supplies, 
                and aid to these people affected by flooding.
              </p>
              <br></br>
            </Col>

            {/*Organization 6*/}
            <Col>
              <br></br>
              <p className="orgs">
                <p className="linkHead">
                  <a
                    href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
                    target="_blank"
                    className="linkText"
                  >
                    COVID-19 Solidarity Response Fund
                  </a>                 
                    <img
                      src="https://www.who.int/images/default-source/infographics/logo-who.tmb-1200v.jpg?Culture=en&sfvrsn=2fcc68a0_15"
                      alt="WHO logo"
                      width="185"
                      height="85"
                      className="logo6"
                    ></img>
                </p>
                The world is facing an unprecedented challenge with communities and economies everywhere
                affected by the growing COVID-19 pandemic. The world is coming together to combat the COVID-19
                pandemic bringing governments, organizations from across industries and sectors and individuals
                together to help respond to this global outbreak. A donation to the World Health Organization (WHO)
                would provide PPE and mask equipment for front line workers, development towards the vaccine, and 
                aid to overflowing hospitals.
              </p>
              <br></br>
            </Col>

          </Row>
          {/*Organization 7*/}
          <Col>
              <br></br>
              <p className="orgs2">
                <p className="linkHead">
                  <a
                    href="https://venmo.com/"
                    target="_blank"
                    className="linkText"
                  >
                    Support the DRIPMaP Team
                  </a>                 
                </p>
                Currently, DRIPMaP is a three man operation with Nickan Hussaini as our project manager, Joel John
                as our srcum master, and Hamish Pierpont as our lead developer. If you want to support the team
                and keep DRIPMaP going, click the link above to support us directly through our Venmo.
              </p>
              <br></br>
            </Col>
          <Row>

          </Row>

        </Container>
        </div>
    );
}

export default Donate;