import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing?.s12};

  @media screen and (min-width: 820px) {
    & {
      padding: 0 0;
    }
  }
`;

export default Container;
