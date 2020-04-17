import { SyntheticEvent } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Container from './styles/Container';
import { useLanguage } from '../utils/languageContext';
import data from '../utils/data';

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
  background: ${(props) => props.theme.colors?.green.primary};

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.theme.spacing?.s12} 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize?.[20]};
    font-family: 'Righteous', cursive;
    text-transform: uppercase;
  }
`;

const Header = (): JSX.Element => {
  const { language, setLanguage } = useLanguage();
  const { covidStats, english, swahili } = data[language];

  const changeLanguage = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    const myLanguage = localStorage.getItem('myLanguage');

    if (myLanguage) {
      localStorage.removeItem('myLanguage');
    }
    localStorage.setItem('myLanguage', value);
    setLanguage(value);
  };

  return (
    <HeaderStyled>
      <Container>
        <div className="header-wrapper">
          <div className="home">
            <Link href="/">
              <a>{covidStats}</a>
            </Link>
          </div>

          <div>
            <select
              name=""
              id="select"
              value={language}
              onChange={changeLanguage}
            >
              <option value="en">{english}</option>
              <option value="sw">{swahili}</option>
            </select>
          </div>
        </div>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
