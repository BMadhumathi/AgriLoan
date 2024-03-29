import React from 'react';
import back from "../assets/images/banner.jpg";
import '../assets/css/Navbar.css';
import ButtonAppBar from '../components/Navbar';
import Footer from '../components/Footer';

function Career() {
  
  const boxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px',
  };

  return (
    <div>
      <ButtonAppBar/>
      <div>
        <div id="img" style={{ backgroundColor: "green", backgroundImage: `url(${back})` }} data-overlay="5">
          <div id="box" style={boxStyle}>
            <div className="box2">
              <div className="home">
                <h1 id="heading">Vision</h1>
                <p id="text" style={{color:"black"}}>
                  Promoting Agri-Business by encouraging institutional and private sector investments and linkages to ensure the empowerment of all farmers in the country.
                </p>
                <br/>
                <h1 id="heading">Mission</h1>
                <p id="text"style={{color:"black"}}>
                  To link small farmers to technology as well as to the markets in association with private, corporate, or cooperative sectors and, if necessary, by providing backward and forward linkages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Career;
