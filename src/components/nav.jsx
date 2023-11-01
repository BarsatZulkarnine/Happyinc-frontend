import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMapMarker, faCloud, faEnvelope, faUniversalAccess, faLanguage, faGear } from '@fortawesome/free-solid-svg-icons';
function Nav() {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <div className="nav__logo--wrapper">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQE4-Vi6u0a94g/company-logo_200_200/0/1625071176709?e=2147483647&v=beta&t=H8xFn-YA5Yx8wRmwn9ePxiCW9vLlXOUM-IKTuoEUXrM"
              className="nav__logo--img"
              alt="HappyInc Logo"
            />
            <h1 className="nav__logo--text">Happy Inc</h1>
          </div>
          <div className="nav__links--primary">
            <div className="nav__link">
              <div className="nav__link--logo">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <a href="">Home</a>
            </div>
            <div className="nav__link">
              <div className="nav__link--logo">
                <FontAwesomeIcon icon={faMapMarker} />
              </div>
              <a href="">Location</a>
            </div>
            <div className="nav__link">
              <div className="nav__link--logo">
                <FontAwesomeIcon icon={faCloud} />
              </div>
              <a href="">Cloud</a>
            </div>
            <div className="nav__link">
              <div className="nav__link--logo">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <a href="">Message</a>
            </div>
          </div>
        </div>
        <div className="nav__links--secondary">
          <div className="nav__link">
            <div className="nav__link--logo">
              <FontAwesomeIcon icon={faUniversalAccess} />
            </div>
            <a href="">Accessibility</a>
          </div>
          <div className="nav__link">
            <div className="nav__link--logo">
              <FontAwesomeIcon icon={faLanguage} />
            </div>
            <a href="">Language</a>
          </div>
          <div className="nav__link">
            <div className="nav__link--logo">
              <FontAwesomeIcon icon={faGear} />
            </div>
            <a href="">Settings</a>
          </div>
        </div>
        <div className="nav__notification">
          <div className="nav__notification--wrapper">
            <h3>New Feature</h3>
            <p>Now you can interact with your mail any time</p>
            <button>Check Now</button>
          </div>
        </div>
        <div className="logout">
          <FontAwesomeIcon icon="right-from-bracket" />
          Logout
        </div>
      </nav>
    </div>
  );
}

export default Nav;