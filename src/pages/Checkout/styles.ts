import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .cart {
    width: 640px;
    padding: 40px;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
  }


`
