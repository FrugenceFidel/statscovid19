import { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useCorona from '../utils/useCorona';
import { numberWithCommas } from '../utils/helpers';
import SelectCountry from './SelectCountry';
import Container from './styles/Container';
import GlobalStats from './styles/GlobalStats';

const CountryStyled = styled.div`
  padding: ${props => props.theme.spacing?.s96} 0;

  .global {
    padding: ${props => props.theme.spacing?.s8} 0;
    font-size: ${props => props.theme.fontSize?.[20]};

    span {
      text-transform: uppercase;
    }
  }
`;

const Hero = (): JSX.Element => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function getCountry() {
      const myCountry = localStorage.getItem('myCountry');
      if (myCountry) {
        setCountry(myCountry);
      } else {
        const fetchedCountry: string | any = await fetch(
          'https://ipapi.co/json'
        ).then(res => res.json());
        if (fetchedCountry && fetchedCountry.country_code) {
          localStorage.setItem('myCountry', fetchedCountry.country_code);
          setCountry(fetchedCountry.country_code);
        } else {
          setCountry('TZ');
        }
      }
    }
    getCountry();
  }, []);

  const { loading, error, corona } = useCorona(
    `https://covid19.mathdro.id/api/countries/${country}`
  );

  return (
    <div>
      <Container>
        <CountryStyled>
          <SelectCountry country={country} setCountry={setCountry} />

          <div className="content">
            {error ? (
              <p>{error}</p>
            ) : loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <p className="global">
                  <span>country cases</span> ( updated{' '}
                  {moment(corona.lastUpdate)
                    .startOf('day')
                    .fromNow()}
                  )
                </p>
                <GlobalStats>
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
                </GlobalStats>
              </>
            )}
          </div>
        </CountryStyled>
      </Container>
    </div>
  );
};

export default Hero;
