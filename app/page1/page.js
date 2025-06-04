'use client';

import { useState } from 'react';
import NavBar from '../components/NavBar'; // Reusable NavBar component
import StarDisplay from '../components/StarDisplay'; // Child component to display stars

export default function Page1() {
  // Declare a piece of state to track the number of stars
  const [starCount, setStarCount] = useState(0);

  // Function to increase the star count by 1
  const increaseStars = () => setStarCount(prev => prev + 1);

  // Function to decrease the star count, with a lower limit of 0
  const decreaseStars = () => setStarCount(prev => Math.max(0, prev - 1));

  return (
    <>
      {/* Top navigation bar */}
      <NavBar />

      {/* Main content area */}
      <main style={{ padding: '2rem' }}>
        <h2>⭐ Star Counter</h2>
        <p>Click the buttons below to add or remove gold stars!</p>

        {/* Buttons for modifying the star count */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={increaseStars}>Add Star</button>
          <button onClick={decreaseStars}>Remove Star</button>
        </div>

        {/* Displaying stars using a child component and passing data via props */}
        <StarDisplay count={starCount} />
      </main>
    </>
  );
}
