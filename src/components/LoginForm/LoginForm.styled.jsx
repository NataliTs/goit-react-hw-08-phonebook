import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const LoginInput = styled.input`
  width: 100%;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: ${p => p.theme.borderInput};
  background: ${p => p.theme.colors.backgroundInput};
  border-radius: 8px;
`;

export const LoginButton = styled.button`
width: 100px;
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
  padding: 4px 10px;
`;
