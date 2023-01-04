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
`;

export const ButtonCard = styled(ButtonContainer)`
      padding: 8px;
      border-radius: 6px;
      position: relative;

      span {
        position: absolute;
        right: -8.35px;
        top: -8px;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['white']};

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: -0.06em;
        display: flex;
        align-items: center;
        justify-content: center;

      }
`;
