import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Container from './styles/Container';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const HeaderStyled = styled.header`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.spacing?.s12} 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* .home {
    font-weight: bold;
  } */
`;

const Header = (): JSX.Element => (
  <HeaderStyled>
    <Container>
      <div className="header-wrapper">
        <div className="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>

        {/* <div>
          <label htmlFor="#select">
            Language:{' '}
            <select name="" id="select">
              <option value="en">english</option>
              <option value="en">swahili</option>
            </select>
          </label>
        </div> */}
      </div>
    </Container>
  </HeaderStyled>
);

export default Header;
