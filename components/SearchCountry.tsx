import { useState, useEffect, SyntheticEvent } from 'react';
import styled from 'styled-components';
import useCoronaCountries from '../utils/useCoronaCountries';
import { ICorona } from '../utils/interfaces';
import { numberWithCommas } from '../utils/helpers';
import Container from './styles/Container';
import CountryStats from './styles/CountryStats';
import { useLanguage } from '../utils/languageContext';
import dataDefn from '../utils/data';

const SearchCountryStyled = styled.div`
  .search-wrapper {
    padding: ${(props) => props.theme.spacing?.s32} 0;

    .stats-title {
      font-size: ${(props) => props.theme.fontSize?.[20]};
      text-align: center;
      text-transform: capitalize;
      font-weight: 500;
    }

    .desc {
      text-align: center;
      margin-bottom: ${(props) => props.theme.spacing?.s20};
    }

    input {
      width: 100%;
      padding: ${(props) => props.theme.spacing?.s8};
      border: 1px solid ${(props) => props.theme.colors?.green.primary};
      border-radius: ${(props) => props.theme.borderRadius?.default};
    }

    input:focus {
      outline: none;
    }

    .countries-stats {
      display: flex;
      flex-wrap: wrap;
      margin-top: ${(props) => props.theme.spacing?.s20};

      .country-stats {
        flex: calc(100%) 1;
        margin-bottom: 2rem;
      }
    }

    @media screen and (min-width: ${(props) => props.theme.screens?.tablet}) {
      & {
        .countries-stats {
          justify-content: space-between;

          .country-stats {
            flex: calc(50% - 1rem) 1;
          }

          .country-stats:nth-child(odd) {
            margin-right: 1rem;
          }

          .country-stats:nth-child(even) {
            margin-left: 1rem;
          }
        }
      }
    }
  }
`;

const SearchCountry = (): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState<ICorona[]>([]);
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
    statsByCountries,
    searchByCountries,
    sortedByTDeaths,
    error: err,
  } = dataDefn[language];

  const { loading, error, corona } = useCoronaCountries(
    'https://corona.lmao.ninja/v2/countries?sort=todayDeaths'
  );

  const handleChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setKeyword(value);
  };

  useEffect(() => {
    if (keyword) {
      const filteredArr = corona.filter((rona) => {
        const country = rona.country?.toLowerCase();

        if (country?.includes(keyword.toLowerCase())) {
          return true;
        }
        return false;
      });
      setData(filteredArr);
    } else {
      setData(corona);
    }
  }, [keyword, corona]);

  return (
    <SearchCountryStyled>
      <Container>
        <div className="search-wrapper">
          <h2 className="stats-title">{statsByCountries}</h2>
          <p className="desc">{sortedByTDeaths}</p>
          <input
            type="search"
            placeholder={searchByCountries}
            onChange={handleChange}
          />
          {error ? (
            <p>{err}</p>
          ) : loading ? (
            <p>{load}</p>
          ) : (
            <div className="countries-stats">
              {data.map((rona) => (
                <div key={rona.country} className="country-stats">
                  <CountryStats>
                    <div className="title">
                      <h2>{rona.country}</h2>
                      <img src={rona.countryInfo?.flag} alt={rona.country} />
                    </div>
                    <ul className="cases">
                      <li>
                        {confirmed}:{' '}
                        <span className="confirmed">
                          {numberWithCommas(rona.cases)}
                        </span>
                      </li>
                      <li>
                        {confirmedToday}:{' '}
                        <span className="confirmed-today">
                          {numberWithCommas(rona.todayCases)}
                        </span>
                      </li>
                      <li>
                        {deaths}:{' '}
                        <span className="deaths">
                          {numberWithCommas(rona.deaths)}
                        </span>
                      </li>
                      <li>
                        {deathsToday}:{' '}
                        <span className="deaths-today">
                          {numberWithCommas(rona.todayDeaths)}
                        </span>
                      </li>
                      <li>
                        {active}:{' '}
                        <span className="active">
                          {numberWithCommas(rona.active)}
                        </span>
                      </li>
                      <li>
                        {critical}:{' '}
                        <span className="critical">
                          {numberWithCommas(rona.critical)}
                        </span>
                      </li>
                      <li>
                        {recovered}:{' '}
                        <span className="recovered">
                          {numberWithCommas(rona.recovered)}
                        </span>
                      </li>
                    </ul>
                  </CountryStats>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </SearchCountryStyled>
  );
};

export default SearchCountry;
