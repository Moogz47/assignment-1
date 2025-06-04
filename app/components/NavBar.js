'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';

// Accept a prop to control visibility
export default function NavBar({ visible = true }) {
  // If not visible, return nothing (null)
  if (!visible) return null;

  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/page1">Page 1</Link>
      <Link href="/page2">Page 2</Link>
      <Link href="/page3">Page 3</Link>
    </nav>
  );
}
