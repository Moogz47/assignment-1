import NavBar from './components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to my first Web Application for Assignment 1!</h1>
        <p>This is the home page of my React + Next.js application.
          Follow the links to view components!
        </p>
      </main>
    </>
  );
}
