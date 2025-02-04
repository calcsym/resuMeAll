import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageNav from '../components/PageNav';
import { useAuth } from '../context/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled.button`
  background-color: green;
  border-radius: 7px;
  border: none;
  padding: 0.6rem 1.2rem;
  color: inherit;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledLogin = styled.div`
  padding: 2.5rem 5rem;
  background-color: var(--color-dark--1);
  min-height: 100vh;
`;

const StyledForm = styled.form`
  background-color: var(--color-dark--2);
  border-radius: 7px;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* Different from other form */
  width: 48rem;
  margin: 8rem auto;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate('/app', { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <StyledLogin>
      <PageNav />

      <StyledForm onSubmit={handleSubmit}>
        <StyledRow>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </StyledRow>

        <StyledRow>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </StyledRow>

        <StyledButton>Login</StyledButton>
      </StyledForm>
    </StyledLogin>
  );
}
