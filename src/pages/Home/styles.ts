import styled from 'styled-components';

const maxWidth = '588px';

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;

  background-image: url('src/assets/intro-bg.png');
  background-size: 100%;
  background-repeat: no-repeat;

  padding: 5.75rem 10rem;

  .textInfo {
    max-width: ${maxWidth};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      color: ${props => props.theme['base-title']};
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${props => props.theme['base-subtitle']};

      margin-top: 16px;
    }
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 20px 40px;
  flex-wrap: wrap;
  margin-top: 4.125rem;

  max-width: ${maxWidth};

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    padding: 8px;
  }

  .option {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    gap: 12px;
   
    &:nth-child(1) {
      width: 231px;
      .icon {
        background-color: ${props => props.theme['yellow-dark']}
      }
    }
    &:nth-child(2) {
      .icon {
        background-color: ${props => props.theme['base-text']}
      }
    }
    &:nth-child(3) {
      width: 231px;
      .icon {
        background-color: ${props => props.theme['yellow-default']}
      }
    }
    &:nth-child(4) {
      .icon {
        background-color: ${props => props.theme['purple-default']}
      }
    }

    p {
      margin: 0;
      font-weight: 400;
      font-size: 1rem;
      color: ${props => props.theme['base-text']};

    }
  }

`;

export const ListProducst = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem;

  h2 {
    margin-bottom: 3.375rem;
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']}
  }

  .card-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 37px 32px;
  }
`;
