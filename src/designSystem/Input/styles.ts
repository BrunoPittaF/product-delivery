import styled, { CSSProperties } from 'styled-components';
export interface ContainerProps {
  maxWidth?: string | number;
  css?: CSSProperties;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%'};
  background-color: ${props => props.theme['base-input']};
  border: ${props => props.theme['base-button']};
  border-radius: 4px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    width: inherit;
    padding: 12px;
    height: 42px;
    border-radius: 4px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;

    &::placeholder {
      color: ${props => props.theme['base-label']};
    }

    &:active{
      outline: 1px solid ${props => props.theme['yellow-dark']}
    }

    &:focus{
      outline: 1px solid ${props => props.theme['yellow-dark']}
    }

  }

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme['base-label']};
    font-style: italic;

    position: absolute;
    right: 12px;
  }
`;
