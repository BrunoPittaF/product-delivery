import styled from 'styled-components';



export const Container = styled.section`
  display: flex;
  align-items: flex-end;
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
    margin-top: 40px;
    width: 526px;
    height: 270px;
    border: 1px solid ${props => props.theme['purple-dark']};
    border-radius: 6px 36px;
    padding: 45px 40px;
    display: flex;
    flex-direction: column;
    gap: 37px;

  }


`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
