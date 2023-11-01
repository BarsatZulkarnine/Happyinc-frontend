import React, { useState } from 'react';
import './chatbox.css'; // Use 'chatbox.css' for the CSS file
import axios from 'axios';

function Chatbox() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:5000/process_data', {
        user_message: searchQuery,
      });
      console.log(response.data.response);

      const userMessage = {
        role: 'user',
        content: searchQuery,
      };

      const chatbotResponse = {
        role: 'chatbot',
        content: response.data.response,
      };

      setChatHistory([...chatHistory, userMessage, chatbotResponse]);

      setSearchResults([response.data.response]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`chatbox${isChatboxOpen ? ' chatbox--open' : ''}`}>
      <button onClick={() => setIsChatboxOpen(!isChatboxOpen)}>Chat</button>
      <div className="chatbox-content">
        <div className="chat-history">
          <div className="chat-messages">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`message ${message.role === 'user' ? 'user' : 'chatbot'}`}
              >
                {message.content}
              </div>
            ))}
          </div>
        </div>
        <div className="user-input">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSearch} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
