import React, { useState } from 'react';
import './chatbox.css'; // Use 'chatbox.css' for the CSS file
import axios from 'axios';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/process_data', {
        user_message: searchQuery,
      });

      // Update search results with the chatbot response
      setSearchResults([response.data.response]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger search when Enter key is pressed
      handleSearch();
    }
  };

  return (
    <section id="home">
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            id="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress} // Handle Enter key press
            placeholder="Search..."
          />
          <div className="search-buttons">
            <div className="search-icon" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </div>
            <button className="voice-button">
              <i className="fas fa-microphone"></i>
            </button>
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
        {searchResults.map((result, index) => (
          <div key={index} className="search-result">
            <h2>Search Result Title</h2>
            <p className="description">{result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
