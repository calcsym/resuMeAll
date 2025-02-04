import styled from 'styled-components';

const UserSection = styled.section`
  position: absolute;
  top: 4.2rem;
  right: 4.2rem;
  background-color: var(--color-dark--1);
  padding: 1rem 1.4rem;
  border-radius: 7px;
  z-index: 999;
  box-shadow: 0 0.8rem 2.4rem rgba(36, 42, 46, 0.5);
  font-size: 1.6rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 1.6rem;
  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default UserSection;
