import { useState, useEffect, SyntheticEvent } from 'react';
import styled from 'styled-components';
import useCoronaCountries, { ICorona } from '../utils/useCoronaCountries';
import { numberWithCommas } from '../utils/helpers';
import Container from './styles/Container';
import CountryStats from './styles/CountryStats';

const SearchCountryStyled = styled.div`
  .search-wrapper {
    padding: ${props => props.theme.spacing?.s32} 0;

    h2 {
      font-size: ${props => props.theme.fontSize?.[20]};
      text-align: center;
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: ${props => props.theme.spacing?.s20};
    }

    input {
      width: 100%;
      padding: ${props => props.theme.spacing?.s8};
      border: 1px solid ${props => props.theme.colors?.green.primary};
      border-radius: ${props => props.theme.borderRadius?.default};
    }

    input:focus {
      outline: none;
    }

    .countries-stats {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: ${props => props.theme.spacing?.s20};

      .country-stats {
        flex: calc(50% - 1rem) 1;
        margin-bottom: 2rem;
      }

      .country-stats:nth-child(odd) {
        margin-right: 1rem;
      }

      .country-stats:nth-child(even) {
        margin-left: 1rem;
      }
    }
  }
`;

const SearchCountry = (): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState<ICorona[]>([]);
  const { loading, error, corona } = useCoronaCountries(
    'https://corona.lmao.ninja/countries?sort=todayDeaths'
  );

  const handleChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setKeyword(value);
  };

  useEffect(() => {
    if (keyword) {
      const filteredArr = corona.filter(rona => {
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
          <h2>Stats by countries</h2>
          <input
            type="search"
            placeholder="Search by a country e.g Tanzania"
            onChange={handleChange}
          />
          {error ? (
            <p>error</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <div className="countries-stats">
              {data.map(rona => (
                <div key={rona.country} className="country-stats">
                  <CountryStats>
                    <div className="title">
                      <h2>{rona.country}</h2>
                      <img src={rona.countryInfo?.flag} alt={rona.country} />
                    </div>
                    <ul className="cases">
                      <li>
                        Confirmed:{' '}
                        <span className="confirmed">
                          {numberWithCommas(rona.cases)}
                        </span>
                      </li>
                      <li>
                        Today Confirmed:{' '}
                        <span className="confirmed-today">
                          {numberWithCommas(rona.todayCases)}
                        </span>
                      </li>
                      <li>
                        Deaths:{' '}
                        <span className="deaths">
                          {numberWithCommas(rona.deaths)}
                        </span>
                      </li>
                      <li>
                        Today Deaths:{' '}
                        <span className="deaths-today">
                          {numberWithCommas(rona.todayDeaths)}
                        </span>
                      </li>
                      <li>
                        Active:{' '}
                        <span className="active">
                          {numberWithCommas(rona.active)}
                        </span>
                      </li>
                      <li>
                        Critical:{' '}
                        <span className="critical">
                          {numberWithCommas(rona.critical)}
                        </span>
                      </li>
                      <li>
                        Recovered:{' '}
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
