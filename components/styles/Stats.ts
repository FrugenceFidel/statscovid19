import styled from 'styled-components';

const Stats = styled.div`
  display: flex;

  div:not(:last-child) {
    margin-right: ${props => props.theme.spacing?.s20};
  }

  .stats {
    text-transform: uppercase;
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

export default Stats;
