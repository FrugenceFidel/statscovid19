import styled from 'styled-components';

const GlobalStats = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: ${props => props.theme.spacing?.s20};
  }

  .stats {
    text-transform: uppercase;
  }

  .confirmed {
    color: ${props => props.theme.colors?.orange.primary};
  }

  .recovered {
    color: ${props => props.theme.colors?.green.primary};
  }

  .deaths {
    color: ${props => props.theme.colors?.red.primary};
  }

  .title {
    font-size: ${props => props.theme.fontSize?.[14]};
  }

  .total {
    font-size: ${props => props.theme.fontSize?.[30]};
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
