import styled from 'styled-components';
import Container from './styles/Container';
import { useLanguage } from '../utils/languageContext';
import data from '../utils/data';

const FooterStyled = styled.footer`
  background: ${props => props.theme.colors?.green.primary};

  .footer-wrapper {
    padding: ${props => props.theme.spacing?.s48} 0;
    text-align: center;
    font-size: ${props => props.theme.fontSize?.[18]};

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Footer = (): JSX.Element => {
  const { language } = useLanguage();
  const { developedBy, dataFrom, sourceCode } = data[language];

  return (
    <FooterStyled>
      <Container>
        <div className="footer-wrapper">
          <p>
            {developedBy}{' '}
            <a href="https://frugencefidel.com/">Frugence Fidel</a>
          </p>
          <p>
            {sourceCode} 👉{' '}
            <a href="https://github.com/FrugenceFidel/statscovid19">
              StatsCovid-19
            </a>
          </p>
          <p>
            {dataFrom}{' '}
            <a href="https://github.com/novelcovid/api">NovelCovid</a> API.
          </p>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
