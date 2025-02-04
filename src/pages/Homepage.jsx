import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';
import styled from 'styled-components';

const StyledHomepage = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url('../bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 4.5rem;
  line-height: 1.3;
`;

const Subtitle = styled.h2`
  width: 90%;
  font-size: 1.9rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem;
`;

export default function Homepage() {
  return (
    <StyledHomepage>
      <PageNav />

      <StyledSection>
        <StyledTitle>
          You travel the world.
          <br />
          ResuMe All keeps track of your adventures.
        </StyledTitle>
        <Subtitle>
          A skill map that tracks your experiences into every position you can
          think of. Never forget your wonderful abilities, and show potential
          boss how you have changed the world.
        </Subtitle>
        <Link to="/login" className="cta">
          Start Tracking Now
        </Link>
      </StyledSection>
    </StyledHomepage>
  );
}
