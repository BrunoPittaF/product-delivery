import { ButtonContainer } from '../../designSystem/Button/styles';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 256px;
    border-radius: 6px 36px;
    background-color: ${props => props.theme['base-card']};
    padding: 0px 20px 20px;

    img {
      width: 120px;
      height: 120px;
      margin-top: -20px;
    }

    .types {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 12px;

      span {
        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        text-transform: uppercase;
        font-size: 0.625rem;
        font-weight: 700;
        text-align: center;

        border-radius: 100px;
        padding: 4px 8px;

      }
    }

    .name {
      color: ${props => props.theme['base-subtitle']};
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      font-size: 1.25rem;
      margin-top: 1rem;
      text-align: center;
    }

    .description {
      color: ${props => props.theme['base-label']};
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      max-width: 216px;
    }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 33px;

  p {
    color: ${props => props.theme['base-text']};
    font-weight: 400;
    font-size: 14px;

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 24px;
    }
  }

  .actionButtons {
    display: flex;
    align-items: center;
    gap: 8px;

    > div {
      height: 38px;
    }
  }

`;


export const ButtonCard = styled(ButtonContainer)`
      padding: 8px;
      border-radius: 6px;
`;