import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 64px;
  justify-content: space-between;
  background-color: yellow;
  border-radius: 4px;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const NavStyled = styled.nav`
  display: flex;
`;

export const NavLinkStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 20px;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
