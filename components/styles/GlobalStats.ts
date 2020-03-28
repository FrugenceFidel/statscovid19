import styled from 'styled-components';

const GlobalStats = styled.div`
  display: flex;
  justify-content: space-between;

  .stats {
    text-transform: uppercase;
  }

  .confirmed {
    color: ${props => props.theme.colors?.orange.primary};
  }

  .recovered {
    color: ${props => props.theme.colors?.green.primary};
  }

  .active {
    color: ${props => props.theme.colors?.yellow.primary};
  }

  .deaths {
    color: ${props => props.theme.colors?.red.primary};
  }

  .title {
    font-size: ${props => props.theme.fontSize?.[14]};
    font-weight: 700;
  }

  .total {
    font-size: 2.6rem;
  }

  @media screen and (min-width: 349px) {
    & {
      .total {
        font-size: ${props => props.theme.fontSize?.[30]};
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
    & {
      .total {
        font-size: ${props => props.theme.fontSize?.[36]};
      }
    }
  }
`;

export default GlobalStats;
