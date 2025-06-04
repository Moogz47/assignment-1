'use client';

import { useState } from 'react';
import NavBar from '../components/NavBar'; // Navigation component
import MessageDisplay from '../components/MessageDisplay'; // Child component to display message

export default function Page3() {
  // State to hold the current input message
  const [message, setMessage] = useState('');

  // Handler for text input change
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Clear the message state
  const clearMessage = () => {
    setMessage('');
  };

  return (
    <>
      {/* Always show the navigation bar here */}
      <NavBar />

      {/* Main page content */}
      <main style={{ padding: '2rem' }}>
        <h2>💬 Message Input</h2>
        <p>Type a message below and see it displayed live!</p>

        {/* Text input bound to message state */}
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
          style={{ padding: '0.5rem', width: '100%', maxWidth: '400px' }}
        />

        {/* Button to clear the message */}
        <div style={{ marginTop: '1rem' }}>
          <button onClick={clearMessage}>Clear Message</button>
        </div>

        {/* Child component displays the message*/}
        <MessageDisplay message={message} />
      </main>
    </>
  );
}
