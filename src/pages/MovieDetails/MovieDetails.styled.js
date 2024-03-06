import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  /* margin-bottom: 20px; */
  margin: 20px;
  /* padding-bottom: 20px; */
  display: flex;
  flex-direction: column;
`;

export const DetailsCard = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  gap: 30px;
  max-width: calc(100vw - 48px);
  border-radius: 4px;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const DetailsLink = styled(NavLink)`
  color: blue;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
