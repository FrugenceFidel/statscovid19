import { useEffect, useState } from 'react';

interface ICountry {
  name?: string;
  iso2?: string;
  iso3?: string;
}

interface ICorona {
  cases?: number;
  recovered?: number;
  active?: number;
  deaths?: number;
  updated?: number;
  countries?: ICountry[];
}

const useCorona = (url: string) => {
  const [corona, setCorona] = useState<ICorona>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));

      setCorona(data);
      setLoading(false);
    }
    getData();
  }, [url]);

  return { loading, error, corona };
};

export default useCorona;
