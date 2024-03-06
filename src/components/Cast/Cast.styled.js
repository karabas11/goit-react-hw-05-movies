import styled from 'styled-components';

export const CastList = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  width: 400px;
  border-radius: 4px;
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
