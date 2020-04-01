export interface ICorona {
  country?: string;
  affectedCountries?: number;
  cases?: number;
  todayCases?: number;
  deaths?: number;
  todayDeaths?: number;
  recovered?: number;
  active?: number;
  critical?: number;
  updated?: number;
  countryInfo?: {
    flag: string;
  };
}
