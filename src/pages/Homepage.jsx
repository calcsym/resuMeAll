import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';
import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          You travel the world.
          <br />
          ResuMe All keeps track of your adventures.
        </h1>
        <h2>
          A skill map that tracks your experiences into every position you can
          think of. Never forget your wonderful abilities, and show potential
          boss how you have changed the world.
        </h2>
        <Link to="/login" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
