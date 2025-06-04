'use client';

// Component receives the number of stars as a prop from Page1
export default function StarDisplay({ count }) {
// Create a string with "count" number of stars or message
  const stars = Array(count).fill('⭐').join(' ');

  return (
// Display stars or message when count is zero
    <div style={{ fontSize: '2rem', marginTop: '1rem' }}>
      {stars || 'No stars yet!'}
    </div>
  );
}
