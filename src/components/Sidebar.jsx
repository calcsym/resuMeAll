import { Outlet } from 'react-router-dom';
import Logo from '../ui/Logo';
import AppNav from './AppNav';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by CalcSim Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
