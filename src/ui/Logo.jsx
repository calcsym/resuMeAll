import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import { useDarkMode } from '../context/DarkModeContext';

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="ResuMe All logo" className={styles.logo} />
    </Link>
  );
}
/*
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png';

  return (
    <StyledLogo>
      <Link to="/">
        <img src="/logo.png" alt="ResuMe All logo" className={styles.logo} />
      </Link>
    </StyledLogo>
  );
}
*/

export default Logo;
