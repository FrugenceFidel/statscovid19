import { FunctionComponent } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from '../lib/theme';
import Header from './Header';
import Footer from './Footer';
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
        <Footer />
      </StyledMyLayout>
    </>
  </ThemeProvider>
);

export default MyLayout;
