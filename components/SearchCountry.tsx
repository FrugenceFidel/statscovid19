import styled from 'styled-components';
import useCoronaCountries from '../utils/useCoronaCountries';
import { numberWithCommas } from '../utils/helpers';
import Container from './styles/Container';
import CountryStats from './styles/CountryStats';

const SearchCountryStyled = styled.div`
  h2 {
    font-size: ${props => props.theme.fontSize?.[20]};
    text-transform: uppercase;
    margin-right: ${props => props.theme.spacing?.s4};
  }
`;

const SearchCountry = (): JSX.Element => {
  const { loading, error, corona } = useCoronaCountries(
    'https://corona.lmao.ninja/countries?sort=todayDeaths'
  );

  return (
    <SearchCountryStyled>
      <Container>
        <h2>Stats by countries</h2>
        <input type="search" placeholder="Search country e.g Tanzania" />
        {error ? (
          <p>error</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {corona.map(rona => (
              <div key={rona.country}>
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
      </Container>
    </SearchCountryStyled>
  );
};

export default SearchCountry;
