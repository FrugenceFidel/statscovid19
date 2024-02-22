'use client';

import styled from 'styled-components';
import useCorona from '../utils/useCorona';
import { numberWithCommas, displayDate } from '../utils/helpers';
import Container from './styles/Container';
import GlobalStats from './styles/GlobalStats';
import { useLanguage } from '../utils/contexts/LanguageContext';
import data from '../utils/data';

const HeroStyled = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  color: white;

  .hero-wrapper {
    padding: ${(props) => props.theme.spacing?.s48} 0;

    @media screen and (min-width: ${(props) => props.theme.screens?.tablet}) {
      & {
        padding: ${(props) => props.theme.spacing?.s64} 0;
      }
    }
  }

  .content {
    margin: 0 auto;

    h1 {
      font-size: ${(props) => props.theme.fontSize?.[30]};
      line-height: ${(props) => props.theme.lineHeight?.none};
      padding-bottom: ${(props) => props.theme.spacing?.s20};
      text-transform: uppercase;

      span {
        text-transform: lowercase;
        font-size: ${(props) => props.theme.fontSize?.[16]};
      }
    }
  }
`;

const Loading = styled.div`
  padding: ${(props) => props.theme.spacing?.s24} 0;
  text-align: center;
`;

const Hero = (): JSX.Element => {
  const { loading, error, corona } = useCorona(
    'https://disease.sh/v3/covid-19/all'
  );
  const { language } = useLanguage();
  const {
    error: err,
    loading: load,
    globalCases,
    updated,
    confirmed,
    deaths,
    recovered,
    active,
    // affectedCountries
  } = data[language];

  return (
    <HeroStyled>
      <Container>
        <div className="hero-wrapper">
          <div className="content">
            {error ? (
              <p>{err}</p>
            ) : loading ? (
              <Loading>{load}</Loading>
            ) : (
              <>
                <h1>
                  {globalCases}{' '}
                  <span>
                    ({updated} {displayDate(corona.updated, language)})
                  </span>
                </h1>

                <GlobalStats>
                  <div className="stats confirmed">
                    <p className="title">{confirmed}</p>
                    <p className="total">{numberWithCommas(corona.cases)}</p>
                  </div>
                  <div className="stats deaths">
                    <p className="title">{deaths}</p>
                    <p className="total">{numberWithCommas(corona.deaths)}</p>
                  </div>
                  <div className="stats active">
                    <p className="title">{active}</p>
                    <p className="total">{numberWithCommas(corona.active)}</p>
                  </div>
                  <div className="stats recovered">
                    <p className="title">{recovered}</p>
                    <p className="total">
                      {numberWithCommas(corona.recovered)}
                    </p>
                  </div>
                  {/* <div className="stats affected">
                    <p className="title">{affectedCountries}</p>
                    <p className="total">
                      {numberWithCommas(corona.affectedCountries)}
                    </p>
                  </div> */}
                </GlobalStats>
              </>
            )}
          </div>
        </div>
      </Container>
    </HeroStyled>
  );
};

export default Hero;
