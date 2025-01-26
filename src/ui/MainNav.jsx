import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FcAddDatabase } from 'react-icons/fc';
import {
  AiOutlineHome,
  AiOutlineIdcard,
  AiFillPushpin,
  AiOutlineUser,
  AiFillSetting
} from 'react-icons/ai';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-600);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <>
          <StyledNavLink to="/dashboard">
            <AiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </>
        <>
          <StyledNavLink to="/pricing">
            <FcAddDatabase />
            <span>Profiles</span>
          </StyledNavLink>
        </>
        <>
          <StyledNavLink to="/product">
            <AiFillPushpin />
            <span>Location</span>
          </StyledNavLink>
        </>
        <>
          <StyledNavLink to="/users">
            <AiOutlineUser />
            <span>Users</span>
          </StyledNavLink>
        </>
        <>
          <StyledNavLink to="/settings">
            <AiFillSetting />
            <span>Settings</span>
          </StyledNavLink>
        </>
      </NavList>
    </nav>
  );
}

export default MainNav;
