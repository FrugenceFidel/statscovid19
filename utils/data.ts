interface IWords {
  covidStats: string;
  lang: string;
  english: string;
  swahili: string;
  developedBy: string;
  dataFrom: string;
  error: string;
  loading: string;
  globalCases: string;
  updated: string;
  confirmed: string;
  deaths: string;
  active: string;
  recovered: string;
  critical: string;
  confirmedToday: string;
  deathsToday: string;
  otherCountries: string;
  statsByCountries: string;
  searchByCountries: string;
  sortedByTDeaths: string;
}

interface IData {
  [key: string]: IWords;
}

const data: IData = {
  en: {
    covidStats: 'COVID-19 Stats',
    lang: 'Language',
    english: 'english',
    swahili: 'swahili',
    developedBy: 'Developed by',
    dataFrom: 'Data sources from',
    error: 'Error',
    loading: 'Loading...',
    globalCases: 'Global cases',
    updated: 'updated',
    confirmed: 'Confirmed',
    deaths: 'Deaths',
    active: 'Active',
    recovered: 'Recovered',
    critical: 'Critical',
    confirmedToday: 'Today Confirmed',
    deathsToday: 'Today Deaths',
    otherCountries: 'Other Countries',
    statsByCountries: 'Stats by countries',
    searchByCountries: 'Search by a country e.g Tanzania',
    sortedByTDeaths: "sorted by today's deaths"
  },
  sw: {
    covidStats: 'Taarifa za COVID-19',
    lang: 'Lugha',
    english: 'kingereza',
    swahili: 'kiswahili',
    developedBy: 'Imetegenezwa na',
    dataFrom: 'Chanzo cha data kutoka kwa',
    error: 'Kuna tatizo jaribu baadae',
    loading: 'Inapakia...',
    globalCases: 'Idadi Ya Dunia Nzima',
    updated: 'Imeboreshwa',
    confirmed: 'Waliothibitika',
    deaths: 'Vifo',
    active: 'Wagonjwa',
    recovered: 'Waliopona',
    critical: 'Mahututi',
    confirmedToday: 'Waliothibitika Leo',
    deathsToday: 'Vifo vya Leo',
    otherCountries: 'Nchi zingine',
    statsByCountries: 'Taarifa kwa nchi',
    searchByCountries: 'Tafuta kwa nchi, mfano Tanzania',
    sortedByTDeaths: 'imepangiliwa kulingana na vifo vya leo'
  }
};

export default data;
