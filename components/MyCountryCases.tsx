import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useCorona from '../utils/useCorona';
import { numberWithCommas, displayDate } from '../utils/helpers';
import Container from './styles/Container';
import CountryStats from './styles/CountryStats';
import { useLanguage } from '../utils/languageContext';
import data from '../utils/data';

const CountryStyled = styled.div`
  padding: ${props => props.theme.spacing?.s32} 0
    ${props => props.theme.spacing?.s48};

  .other {
    margin: 0 auto;
    margin-top: ${props => props.theme.spacing?.s20};
    padding: ${props => props.theme.spacing?.s8};
    display: flex;
    justify-content: center;
    text-decoration: none;
    border-radius: ${props => props.theme.borderRadius?.default};
    background: ${props => props.theme.colors?.green.primary};
    color: #fff;
    width: ${props => props.theme.spacing?.s224};
  }

  @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
    & {
      padding: ${props => props.theme.spacing?.s64} 0;
    }
  }
`;

const MyCountryCases = (): JSX.Element => {
  const [country, setCountry] = useState('TZ');
  const { language } = useLanguage();
  const {
    loading: load,
    confirmed,
    confirmedToday,
    deaths,
    deathsToday,
    recovered,
    active,
    critical,
    updated,
    otherCountries,
    error: err
  } = data[language];

  useEffect(() => {
    async function getCountry() {
      const myCountryCode = localStorage.getItem('myCountryCode');
      if (myCountryCode) {
        setCountry(myCountryCode);
      } else {
        const fetchedCountry: string | any = await fetch(
          'https://ipapi.co/json'
        ).then(res => res.json());
        if (fetchedCountry && fetchedCountry.country_code) {
          localStorage.setItem('myCountryCode', fetchedCountry.country_code);
          setCountry(fetchedCountry.country_code);
        } else {
          setCountry('TZ');
        }
      }
    }
    getCountry();
  }, []);

  const { loading, error, corona } = useCorona(
    `https://corona.lmao.ninja/countries/${country}`
  );

  return (
    <div>
      <Container>
        <CountryStyled>
          <div className="content">
            {error ? (
              <p>{err}</p>
            ) : loading ? (
              <p>{load}</p>
            ) : (
              <CountryStats>
                <div className="title">
                  <h2>{corona.country}</h2>
                  <img src={corona.countryInfo?.flag} alt={corona.country} />
                </div>
                <ul className="cases">
                  <li>
                    {confirmed}:{' '}
                    <span className="confirmed">
                      {numberWithCommas(corona.cases)}
                    </span>
                  </li>
                  <li>
                    {confirmedToday}:{' '}
                    <span className="confirmed-today">
                      {numberWithCommas(corona.todayCases)}
                    </span>
                  </li>
                  <li>
                    {deaths}:{' '}
                    <span className="deaths">
                      {numberWithCommas(corona.deaths)}
                    </span>
                  </li>
                  <li>
                    {deathsToday}:{' '}
                    <span className="deaths-today">
                      {numberWithCommas(corona.todayDeaths)}
                    </span>
                  </li>
                  <li>
                    {active}:{' '}
                    <span className="active">
                      {numberWithCommas(corona.active)}
                    </span>
                  </li>
                  <li>
                    {critical}:{' '}
                    <span className="critical">
                      {numberWithCommas(corona.critical)}
                    </span>
                  </li>
                  <li>
                    {recovered}:{' '}
                    <span className="recovered">
                      {numberWithCommas(corona.recovered)}
                    </span>
                  </li>
                </ul>
                <p className="updated">
                  {updated} {displayDate(corona.updated, language)}
                </p>
              </CountryStats>
            )}
          </div>
          <Link href="/countries">
            <a className="other">{otherCountries}  👉</a>
          </Link>
        </CountryStyled>
      </Container>
    </div>
  );
};

export default MyCountryCases;
