import styled from 'styled-components';

const GlobalStats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .stats {
    text-transform: uppercase;
    flex-basis: 50%;
    margin-bottom: 1rem;

    @media screen and (min-width: ${(props) => props.theme.screens?.tablet}) {
      flex-basis: auto;
      margin-bottom: 0;
    }
  }

  .confirmed {
    color: ${(props) => props.theme.colors?.orange.primary};
  }

  .recovered {
    color: ${(props) => props.theme.colors?.green.primary};
  }

  .active {
    color: ${(props) => props.theme.colors?.yellow.primary};
  }

  .deaths {
    color: ${(props) => props.theme.colors?.red.primary};
  }

  .affected {
    display: none;

    @media screen and (min-width: 488px) {
      display: block;
    }
  }

  .title {
    font-size: ${(props) => props.theme.fontSize?.[14]};
    font-weight: 700;
  }

  .total {
    font-size: 2.6rem;
  }

  @media screen and (min-width: 349px) {
    & {
      .total {
        font-size: ${(props) => props.theme.fontSize?.[30]};
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.screens?.tablet}) {
    & {
      .total {
        font-size: ${(props) => props.theme.fontSize?.[36]};
      }
    }
  }
`;

export default GlobalStats;
