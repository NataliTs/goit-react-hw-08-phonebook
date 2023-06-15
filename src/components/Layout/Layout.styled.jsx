import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 150px;
  gap: 20px;
  color: ${p => p.theme.colors.text};
`;
