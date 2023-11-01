import React from 'react';

function Sections() {
  return (
      <section id="dashboard">
        <div className="dashboard__content">
          <div className="dashboard__text">
            <h1>Home</h1>
          </div>
          <div className="dashboard__actions">
            <button className="peer-support-button">Support</button>
            <button className="crisis-line-button">Contact</button>
            <div className="user-info">
              <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="User Avatar" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Sections;

