import { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from '../lib/theme';
import Header from './Header';
import Meta from './Meta';

const StyledMyLayout = styled.div``;

const MyLayout: FunctionComponent = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <StyledMyLayout>
        <Meta />
        <Header />
        {props.children}
        <footer>
          <div style={{ background: 'purple' }}>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              flaticon
            </a>
          </div>
        </footer>
      </StyledMyLayout>
    </>
  </ThemeProvider>
);

export default MyLayout;
