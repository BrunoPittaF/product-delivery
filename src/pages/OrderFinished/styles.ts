import styled from 'styled-components';



export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;


export const OrderFinishedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 32px;
    color: ${props => props.theme['yellow-dark']};
    margin-bottom: 4px;
  }

  h2 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  .box {
    width: 526px;
    height: 270px;

    background-clip: padding-box; /* !importanté */
    border: 1px solid 1px transparent; /* !importanté */
    border-radius: 6px 36px;

    &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -1px; /* !importanté */
      border-radius: inherit; /* !importanté */
      background: linear-gradient(102.89deg,#DBAC2C 2.61%,#8047F8 98.76%);
    }
  }


`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Label = styled.p`
  width: 310px;
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme['base-text']};

`;

export const Content = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${props => props.theme['base-text']};
`;
