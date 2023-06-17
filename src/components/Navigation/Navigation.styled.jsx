import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  font-size: 24px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: ${p => p.theme.colors.acentText};
    text-decoration: underline;
  }
`;
