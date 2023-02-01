import styled from 'styled-components';

export const Container = styled.div`
    width: 368px;
    padding: 8px 4px 26px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.theme['base-card']};
    margin-bottom: 24px;

    border-bottom: 1px solid ${props => props.theme['base-button']};

    img {
      width: 64px;
      height: 64px;
      margin-right: 20px;
    }

    .items-column {
      margin-right: 50px;
      margin-left: 20px;
      width: 100%;
      p {
        font-weight: 400;
        font-size: 16px;
        display: flex;
        align-items: center;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 8px;
      }

      .container-buttons {
        display: flex;
        align-items: center;
        gap: 8px;

        button {
          padding: 6.5px;
          border-radius: 6px;
          gap: 4px;
        }

        span {
          color: ${props => props.theme['base-text']};
          font-weight: 400;
          font-size: 12px;
          text-transform: uppercase;
        }
      }
    }

    .price {

    }
`;

export const Price = styled.p`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme['base-text']};

  span {
    margin-left: 2px;
  }


`
