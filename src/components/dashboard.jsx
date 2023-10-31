import React from 'react';

function Sections() {
  return (
      <section id="dashboard">
        <div className="dashboard__content">
          <div className="dashboard__text">
            <h1>Dashboard Overview</h1>
            <p>Welcome back, let's get back to work.</p>
          </div>
          <div className="dashboard__actions">
            <button className="peer-support-button">Peer Support</button>
            <button className="crisis-line-button">Crisis Line</button>
            <div className="user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXrFrW5xHkd3XogggMVR6naW0Bw-mPOYxA3-PdQI12eGlHlazc" alt="User Avatar" />
              <p>User Name</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Sections;

