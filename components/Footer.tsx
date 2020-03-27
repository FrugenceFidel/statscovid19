import styled from 'styled-components';
import Container from './styles/Container';

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

const Footer = (): JSX.Element => (
  <FooterStyled>
    <Container>
      <div className="footer-wrapper">
        <p>
          Developed by <a href="https://frugencefidel.com/">Frugence Fidel</a>
        </p>
        <p>
          Data sources from{' '}
          <a href="https://github.com/novelcovid/api">NovelCovid</a> API.
        </p>
        <p>
          Source code{' '}
          <a href="https://github.com/FrugenceFidel/statscovid19">here</a>
        </p>
      </div>
    </Container>
  </FooterStyled>
);

export default Footer;
