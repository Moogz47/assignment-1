'use client';

// Component receives a message string and displays it
export default function MessageDisplay({ message }) {
  return (
    <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
      <strong>Current Message:</strong> {message || '(No message yet)'}
    </div>
  );
}
