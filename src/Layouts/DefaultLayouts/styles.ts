import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`;
