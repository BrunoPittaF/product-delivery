import styled from 'styled-components';

export const Container = styled.div`
    width: 368px;
    padding: 9.5px 0px 26px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${props => props.theme['base-card']};
    margin-bottom: 24px;

    border-bottom: 1px solid ${props => props.theme['base-button']};

    img {
      width: 64px;
      height: 64px;
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
   min-width: 64px;

  color: ${props => props.theme['base-text']};

`
