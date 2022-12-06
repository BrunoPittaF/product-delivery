import { ReactNode } from 'react';
import styled from 'styled-components';

const VARIANT_TYPE = {
  'yellow': {
    color: '#ffffff',
    backgroundColor: '#DBAC2C'
  }, 
  'purple': {
    color: '#4B2995',
    backgroundColor: '#EBE5F9'
  },
  'purple-dark': {
    color: '#ffffff',
    backgroundColor: '#4B2995'
  },
   'grey': {
    color: '#574F4D',
    backgroundColor: '#E6E5E5'
  },
   'yellow-basic': {
    color: '#C47F17',
    backgroundColor: '#F1E9C9'
  },
}

export interface ButtonProps {
  variant?:  keyof typeof VARIANT_TYPE,
  children: ReactNode,
  iconLeft?: ReactNode,
}



export const ButtonContainer = styled.button<ButtonProps>`
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${props => VARIANT_TYPE[props.variant!].color};
      background-color: ${props => VARIANT_TYPE[props.variant!].backgroundColor }   
`;
