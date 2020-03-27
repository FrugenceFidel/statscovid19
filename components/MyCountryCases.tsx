import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useCorona from '../utils/useCorona';
import { numberWithCommas } from '../utils/helpers';
import Container from './styles/Container';

const CountryStyled = styled.div`
  padding: ${props => props.theme.spacing?.s64} 0;

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
    width: 300px;
  }
`;

const CountryStats = styled.div`
  box-shadow: ${props => props.theme.boxShadow?.default};
  border-radius: ${props => props.theme.borderRadius?.default};
  padding: ${props => props.theme.spacing?.s8};
  background: #fff;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.8px solid #ebebeb;
    padding-bottom: ${props => props.theme.spacing?.s8};
    margin-bottom: ${props => props.theme.spacing?.s8};

    h2 {
      font-size: ${props => props.theme.fontSize?.[24]};
      margin-right: ${props => props.theme.spacing?.s16};
    }

    img {
      width: ${props => props.theme.spacing?.s48};
      height: ${props => props.theme.spacing?.s24};
    }
  }

  .cases {
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: ${props => props.theme.fontSize?.[18]};

    li {
      padding-right: ${props => props.theme.spacing?.s20};
    }

    .confirmed,
    .confirmed-today {
      color: ${props => props.theme.colors?.orange.primary};
    }

    .recovered {
      color: ${props => props.theme.colors?.green.primary};
    }

    .active {
      color: ${props => props.theme.colors?.yellow.primary};
    }

    .deaths,
    .deaths-today {
      color: ${props => props.theme.colors?.red.primary};
    }
  }
`;

const MyCountryCases = (): JSX.Element => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function getCountry() {
      const myCountryName = localStorage.getItem('myCountryName');
      if (myCountryName) {
        setCountry(myCountryName);
      } else {
        const fetchedCountry: string | any = await fetch(
          'https://ipapi.co/json'
        ).then(res => res.json());
        if (fetchedCountry && fetchedCountry.country_name) {
          localStorage.setItem('myCountryName', fetchedCountry.country_name);
          setCountry(fetchedCountry.country_name);
        } else {
          setCountry('Tanzania');
        }
      }
    }
    getCountry();
  }, []);

  const { loading, error, corona } = useCorona(
    `https://corona.lmao.ninja/countries/${country || 'Tanzania'}`
  );

  return (
    <div>
      <Container>
        <CountryStyled>
          <div className="content">
            {error ? (
              <p>{error}</p>
            ) : loading ? (
              <p>Loading...</p>
            ) : (
              <CountryStats>
                <div className="title">
                  <h2>{country}</h2>
                  <img src={corona.countryInfo?.flag} alt={country} />
                </div>
                <ul className="cases">
                  <li>
                    Confirmed:{' '}
                    <span className="confirmed">
                      {numberWithCommas(corona.cases)}
                    </span>
                  </li>
                  <li>
                    Today Confirmed:{' '}
                    <span className="confirmed-today">
                      {numberWithCommas(corona.todayCases)}
                    </span>
                  </li>
                </ul>

                <ul className="cases">
                  <li>
                    Deaths:{' '}
                    <span className="deaths">
                      {numberWithCommas(corona.deaths)}
                    </span>
                  </li>
                  <li>
                    Today Deaths:{' '}
                    <span className="deaths-today">
                      {numberWithCommas(corona.todayDeaths)}
                    </span>
                  </li>
                </ul>

                <ul className="cases">
                  <li>
                    Active:{' '}
                    <span className="active">
                      {numberWithCommas(corona.active)}
                    </span>
                  </li>
                  <li>
                    Critical:{' '}
                    <span className="critical">
                      {numberWithCommas(corona.critical)}
                    </span>
                  </li>
                  <li>
                    Recovered:{' '}
                    <span className="recovered">
                      {numberWithCommas(corona.recovered)}
                    </span>
                  </li>
                </ul>
              </CountryStats>
            )}
          </div>
          <Link href="/countries">
            <a className="other">Other Countries  👉</a>
          </Link>
        </CountryStyled>
      </Container>
    </div>
  );
};

export default MyCountryCases;
