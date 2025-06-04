'use client';

import { useState } from 'react';
import NavBar from '../components/NavBar'; // Reusable navbar component

export default function Page2() {
  // State to control whether the NavBar is visible
  const [showNav, setShowNav] = useState(true);

  // Toggle the visibility state of the NavBar
  const toggleNavBar = () => setShowNav(prev => !prev);

  return (
    <>
    {/* Pass the showNav state as a prop to the NavBar component */}
      <NavBar visible={showNav} />

    {/* Main content area */}
      <main style={{ padding: '2rem' }}>
        <h2>🔘 Toggle NavBar Visibility</h2>
        <p>Click the button below to show or hide the NavBar.</p>

    {/* Button to trigger toggle function */}
        <button onClick={toggleNavBar}>
          {showNav ? 'Hide' : 'Show'} NavBar
        </button>
      </main>
    </>
  );
}
