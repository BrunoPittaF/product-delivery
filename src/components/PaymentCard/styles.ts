import styled, { css } from 'styled-components';

interface ContainerProps {
  isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.theme['base-button']};
    padding: 16px;
    border-radius: 6px;
    width: 180px;
    height: 51px;
    cursor: pointer;
    border: 1px solid ${props => props.theme['base-button']};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    span {
      text-transform: uppercase;
      color: ${props => props.theme['base-text']};
      font-size: 12px;
      font-family: 'Roboto'
    }

    &:hover {
      background-color: ${props => props.theme['base-hover']};
    }

    ${({isActive}) => isActive && css`
      background-color: ${props => props.theme['purple-light']};
      border: 1px solid ${props => props.theme['purple-default']};

    `}
`;
