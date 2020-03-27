import moment from 'moment';
import styled from 'styled-components';
import useCorona from '../utils/useCorona';
import { numberWithCommas } from '../utils/helpers';
import Container from './styles/Container';
import Stats from './styles/Stats';

const HeroStyled = styled.main`
  background: url('/background.svg'),
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  color: white;

  .hero-wrapper {
    padding: ${props => props.theme.spacing?.s32} 0
      ${props => props.theme.spacing?.s32};

    @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
      & {
        display: flex;
        padding: ${props => props.theme.spacing?.s32} 0
          ${props => props.theme.spacing?.s80};
      }
    }
  }

  .corona {
    display: none;

    @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
      & {
        background: white;
        width: 15rem;
        height: 15rem;
        border-radius: ${props => props.theme.borderRadius?.default};
        display: block;

        img {
          border-radius: ${props => props.theme.borderRadius?.default};
          padding: ${props => props.theme.spacing?.s8};
          max-width: 100%;
        }
      }
    }
  }

  .content {
    h1 {
      font-size: ${props => props.theme.fontSize?.[30]};
      line-height: ${props => props.theme.lineHeight?.none};
      text-transform: uppercase;
    }

    .global {
      padding: ${props => props.theme.spacing?.s8} 0;
      font-size: ${props => props.theme.fontSize?.[20]};

      span {
        text-transform: uppercase;
      }
    }

    @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
      & {
        margin-left: ${props => props.theme.spacing?.s32};
      }
    }
  }
`;

const Hero = (): JSX.Element => {
  const { loading, error, corona } = useCorona(
    'https://covid19.mathdro.id/api'
  );

  return (
    <HeroStyled>
      <Container>
        <div className="hero-wrapper">
          <div className="content">
            <h1>Covid-19 Stats</h1>
            {error ? (
              <p>error</p>
            ) : loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p className="global">
                  <span>Global cases</span> ( updated{' '}
                  {moment(corona.lastUpdate)
                    .startOf('day')
                    .fromNow()}
                  )
                </p>
                <Stats>
                  <div className="stats">
                    <p className="title">confirmed</p>
                    <p className="total">
                      {numberWithCommas(corona.confirmed?.value)}
                    </p>
                  </div>
                  <div className="stats">
                    <p className="title">recovered</p>
                    <p className="total">
                      {numberWithCommas(corona.recovered?.value)}
                    </p>
                  </div>
                  <div className="stats">
                    <p className="title">deaths</p>
                    <p className="total">
                      {numberWithCommas(corona.deaths?.value)}
                    </p>
                  </div>
                </Stats>
              </>
            )}
          </div>
        </div>
      </Container>
    </HeroStyled>
  );
};

export default Hero;
