import React from 'react';

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
                <i className="fas fa-house"></i>
              </div>
              <a href="">Home</a>
            </div>
            <div className="nav__link">
              <div className="nav__link--logo">
                <i className="fas fa-map-marker"></i>
              </div>
              <a href="">Location</a>
            </div>
            <div className="nav__link">
              <div className="nav__link--logo">
                <i className="fas fa-cloud"></i>
              </div>
              <a href="">Cloud</a>
            </div>
            <div className="nav__link">
              <div className="nav__link--logo">
                <i className="fas fa-envelope"></i>
              </div>
              <a href="">Message</a>
            </div>
          </div>
        </div>
        <div className="nav__links--secondary">
          <div className="nav__link">
            <div className="nav__link--logo">
              <i className="fas fa-universal-access"></i>
            </div>
            <a href="">Accessibility</a>
          </div>
          <div className="nav__link">
            <div className="nav__link--logo">
              <i className="fa-solid fa-language"></i>
            </div>
            <a href="">Language</a>
          </div>
          <div className="nav__link">
            <div className="nav__link--logo">
              <i className="fa-solid fa-gear"></i>
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
          <i className="fas fa-right-from-bracket"></i>
          Logout
        </div>
      </nav>
    </div>
  );
}

export default Nav;
