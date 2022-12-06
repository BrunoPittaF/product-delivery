import { ButtonContainer } from '../../designSystem/Button/styles';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  
`;

export const Button = styled(ButtonContainer)`
      gap: 4px;
      border-radius: 6px;
      padding: 8px;


      font-size: 14px;
      font-weight: 400;


`
