import React, { useState } from 'react';
import axios from 'axios';
import NAV from './components/nav.jsx';
import Dashboard from './components/dashboard.jsx';
import Home from './components/home.jsx';
import './App.css';
import Chatbox from './components/chatbox.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/process_data', {
        user_message: searchQuery,
      });
      setSearchResults([response.data.response]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="body">
  
        <NAV />
       <section>
        <Dashboard />
        <Home />
            <Chatbox />
      </section>
    </div>
  );
}

export default App;
