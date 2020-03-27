import styled from 'styled-components';
import Container from './styles/Container';

const FooterStyled = styled.footer`
  background: ${props => props.theme.colors?.green.primary};
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
          <a href="https://github.com/novelcovid/api">NovelCovid</a> API
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
