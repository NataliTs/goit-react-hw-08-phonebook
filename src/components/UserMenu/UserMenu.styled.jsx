import styled from 'styled-components';

export const UsMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserName = styled.p`
  font-weight: 700;
`;

export const LogoutBtn = styled.button`
  border: none;
  border-radius: 10px;
  text-decoration: none;
  color: white;
  background: ${p => p.theme.colors.backgroundBtn};
  box-shadow: ${p => p.theme.boxShadowBtn};
  :hover {
    background: ${p => p.theme.colors.backgroundBtnHover};
    box-shadow: none;
    position: relative;
    top: 5px;
  }
`;
