import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;

  .delivery {
    width: 640px;
    padding: 40px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;

    header {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 32px;

      .text-container {
        p {
          &:nth-child(1) {
            font-family: 'Roboto';
            font-size: 16px;
            color: ${props => props.theme['base-subtitle']};
          }
          &:nth-child(2) {
            font-family: 'Roboto';
            font-size: 14px;
            color: ${props => props.theme['base-text']};
            margin-top: 2px;
          }
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }

  .payment {
    width: 640px;
    padding: 40px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
    header {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 32px;

      .text-container {
        p {
          &:nth-child(1) {
            font-family: 'Roboto';
            font-size: 16px;
            color: ${props => props.theme['base-subtitle']};
          }
          &:nth-child(2) {
            font-family: 'Roboto';
            font-size: 14px;
            color: ${props => props.theme['base-text']};

            margin-top: 2px;
          }
        }
      }
    }

    .payment-forms {
      display: flex;
      align-items: center;
      gap: 12px;

      margin-top: 32px;
    }
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 15px;
  width: 448px;
  

  .cart {
    width: 100%;
    padding: 40px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 44px;

    .confirmButton {
      padding: 12px 8px;
      border-radius: 6px;
      width: 100%;
      text-transform: uppercase;
      margin-top: 24px;
      font-size: 14px;
    }
  }



`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12.5px;

`;


export const LabelPrice = styled.p<{
  variant: 'regular' | 'subtitle'
}>`
  ${({theme, variant}) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${
      variant === 'regular' ? css`
        font-weight: 400;
        font-size: 14px;
        color: ${theme['base-text']};

        
      ` : css`
        font-weight: 700;
        font-size: 20px;
        color: ${theme['base-subtitle']};

      
      `
    }
  
  
  `}


`;


export const LabelCoin = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;


  &::before {
    content: "R$";
    margin-right: 2px;
  }
`;
