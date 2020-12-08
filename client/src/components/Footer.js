import React from "react";
import "./Styles/Footer.css";

function Footer() {
    return (
      <div className="main-footer">
            <div className="row">
            <a href="https://www.disasterassistance.gov/" target="_blank">
              <img src={ "/health.png" } alt="React logo" className="heart"/>
            </a>
            <p>Hamish Pierpont | Joel John | Nickan Hussaini </p>
            <a href="https://github.com/joeljohn12/DRIPMap" target="_blank">
              <img src={ "/cat.png" } alt="React logo" className="cat"/>
            </a>
        </div>
       </div>   
    );
  }
  
  export default Footer;