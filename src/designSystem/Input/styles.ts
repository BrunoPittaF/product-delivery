import styled from 'styled-components';
export interface ContainerProps {
  maxWidth?: string | number;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  background-color: ${props => props.theme['base-input']};
`;
