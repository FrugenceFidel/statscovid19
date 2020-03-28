interface IWords {
  covidStats: string;
  lang: string;
  english: string;
  swahili: string;
  developedBy: string;
  dataFrom: string;
  sourceCode: string;
  here: string;
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
}

interface IData {
  [key: string]: IWords;
}

const data: IData = {
  en: {
    covidStats: 'COVID-19 Stats',
    lang: 'Language',
    english: 'English',
    swahili: 'Swahili',
    developedBy: 'Developed by',
    dataFrom: 'Data sources from',
    sourceCode: 'Source code',
    here: 'here',
    error: 'Error',
    loading: 'Loading...',
    globalCases: 'Global cases',
    updated: 'updated',
    confirmed: 'confirmed',
    deaths: 'deaths',
    active: 'active',
    recovered: 'recovered',
    critical: 'Critical',
    confirmedToday: 'Today Confirmed',
    deathsToday: 'Today Deaths',
    otherCountries: 'Other Countries',
    statsByCountries: 'Stats by countries'
  },
  sw: {
    covidStats: 'Taarifa za COVID-19',
    lang: 'Lugha',
    english: 'Kingereza',
    swahili: 'Kiswahili',
    developedBy: 'Imetegenezwa na',
    dataFrom: 'Chanzo cha data kutoka kwa',
    sourceCode: 'Chanzo cha msimbo',
    here: 'hapa',
    error: 'Kuna tatizo jaribu baadae',
    loading: 'Inapakia...',
    globalCases: 'Kesi za ulimwengu',
    updated: 'Imeboreshwa',
    confirmed: 'Imethibitika',
    deaths: 'Vifo',
    active: 'Hai',
    recovered: 'Pona',
    critical: 'Mahututi',
    confirmedToday: 'Wamethibitika Leo',
    deathsToday: 'Vifo vya Leo',
    otherCountries: 'Nchi zingine',
    statsByCountries: 'Taarifa kwa nchi'
  }
};

export default data;
