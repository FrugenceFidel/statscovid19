import { FunctionComponent } from 'react';
import styled from 'styled-components';
import useCorona from '../utils/useCorona';

const SelectCountryStyled = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${props => props.theme.fontSize?.[20]};
    text-transform: uppercase;
    margin-right: ${props => props.theme.spacing?.s4};
  }

  select {
    width: 150px;
  }

  @media screen and (min-width: ${props => props.theme.screens?.tablet}) {
    & {
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      select {
        width: 200px;
      }
    }
  }
`;

interface Props {
  country: string;
  setCountry: any;
}

const SelectCountry: FunctionComponent<Props> = ({ country, setCountry }) => {
  const { loading, error, corona } = useCorona(
    'https://covid19.mathdro.id/api/countries'
  );

  return (
    <SelectCountryStyled>
      <h2>Corona virus stats by country</h2>
      {error ? (
        <p>error</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <label htmlFor="country">
          Select country:{' '}
          <select
            id="country"
            onChange={v => {
              setCountry(v.target.value);
            }}
            value={country}
          >
            {corona &&
              corona.countries &&
              corona.countries.map((item, key) => (
                <option value={item.iso2} key={key}>
                  {item.name}
                </option>
              ))}
          </select>
        </label>
      )}
    </SelectCountryStyled>
  );
};

export default SelectCountry;
