'use client';

import {
  useState,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  FC,
  ReactNode,
} from 'react';

type ILanguage = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

const LanguageContext = createContext<ILanguage | null>(null);

const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    async function getMyLanguage() {
      const myLanguage = localStorage.getItem('myLanguage');
      if (myLanguage) {
        setLanguage(myLanguage);
      } else {
        const fetchedCountry: string | any = await fetch(
          'https://ipapi.co/json'
        ).then((res) => res.json());
        if (fetchedCountry && fetchedCountry.country_code === 'TZ') {
          localStorage.setItem('myLanguage', 'sw');
          setLanguage('sw');
        } else {
          localStorage.setItem('myLanguage', 'en');
          setLanguage('en');
        }
      }
    }
    getMyLanguage();
  }, []);

  const value: ILanguage = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('LanguageContext was used outside the LanguageProvider.');
  }
  return context;
};

export { LanguageProvider, useLanguage };
