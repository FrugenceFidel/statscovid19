import { useEffect, useState } from 'react';

export interface ICorona {
  country?: string;
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

const useCoronaCountries = (url: string) => {
  const [corona, setCorona] = useState<ICorona[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    async function getData() {
      setLoading(true);
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));

      if (mounted) {
        setCorona(data);
      }
      setLoading(false);
      return () => (mounted = false);
    }
    getData();
  }, [url]);

  return { loading, error, corona };
};

export default useCoronaCountries;
