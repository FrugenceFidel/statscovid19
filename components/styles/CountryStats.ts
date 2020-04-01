import styled from 'styled-components';

const CountryStats = styled.div`
  box-shadow: ${props => props.theme.boxShadow?.default};
  border-radius: ${props => props.theme.borderRadius?.default};
  padding: ${props => props.theme.spacing?.s8};
  background: #fff;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors?.grey.primary};
    padding-bottom: ${props => props.theme.spacing?.s8};
    margin-bottom: ${props => props.theme.spacing?.s8};

    h2 {
      font-size: ${props => props.theme.fontSize?.[24]};
      margin-right: ${props => props.theme.spacing?.s16};
    }

    img {
      width: ${props => props.theme.spacing?.s48};
      height: ${props => props.theme.spacing?.s24};
    }
  }

  .cases {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: ${props => props.theme.fontSize?.[18]};

    .confirmed,
    .confirmed-today {
      color: ${props => props.theme.colors?.orange.primary};
    }

    .recovered {
      color: ${props => props.theme.colors?.green.primary};
    }

    .active {
      color: ${props => props.theme.colors?.yellow.primary};
    }

    .deaths,
    .deaths-today {
      color: ${props => props.theme.colors?.red.primary};
    }
  }
`;

export default CountryStats;
