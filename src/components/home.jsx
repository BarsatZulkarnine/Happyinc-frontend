import React from 'react'

function home() {
  return (
    <section id="home">
    <div className="search">
      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Search..." />
        <div className="search-buttons">
          <button className="search-button"><i className="fas fa-search"></i></button>
          <button className="voice-button"><i className="fas fa-microphone"></i></button>
        </div>
      </div>

      <div className="search-options">
        <ul>
          <li>All</li>
          <li>Videos</li>
          <li>News</li>
          <li>Images</li>
          <li>More</li>
        </ul>
      </div>
    </div>
    <div className="search__results">
      <div className="search-result">
        <h2>Example Result Title</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum nunc. Nullam malesuada, lorem ac condimentum bibendum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eius natus nostrum suscipit quasi sequi maxime repudiandae laboriosam nisi  odio.</p>
      </div>

      <div className="search-result">
        <h2>Example Result Title</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum nunc. Nullam malesuada, lorem ac condimentum bibendum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eius natus nostrum suscipit quasi sequi maxime repudiandae laboriosam nisi  odio.</p>
      </div>

      <div className="search-result">
        <h2>Example Result Title</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non vestibulum nunc. Nullam malesuada, lorem ac condimentum bibendum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate eius natus nostrum suscipit quasi sequi maxime repudiandae laboriosam nisi  odio.</p>
      </div>
    </div>
  </section>
  )
}

export default home
