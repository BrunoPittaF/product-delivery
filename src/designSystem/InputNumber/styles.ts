import styled, { css } from 'styled-components';

interface InputContainerProps {
  disabled: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme['base-button']};
  max-width: 72px;
  width: fit-content;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;


  ${props => props.disabled ? css`
    &:hover {
      cursor: not-allowed
    }
    svg {
      &:hover {
        cursor: not-allowed
      }
    }

    input {
      &:hover {
        cursor: not-allowed
      }
    }
  
  ` : ''}


  svg {
    cursor: pointer;

    &:hover {
      fill: ${props => props.theme['purple-dark']};
    }

  }

  input {
    background-color: unset;
    border: unset;
    width: fit-content;
    max-width: 20px;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    margin: 0;
    }
  }
`;
