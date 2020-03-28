import {
  useState,
  useEffect,
  createContext,
  useContext,
  FunctionComponent,
  Dispatch,
  SetStateAction
} from 'react';

interface ILanguage {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useLanguage, LanguageContextProvider] = createCtx<ILanguage>();

const LanguageProvider: FunctionComponent = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    async function getMyLanguage() {
      const myLanguage = localStorage.getItem('myLanguage');
      if (myLanguage) {
        setLanguage(myLanguage);
      } else {
        const fetchedCountry: string | any = await fetch(
          'https://ipapi.co/json'
        ).then(res => res.json());
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

  return (
    <LanguageContextProvider value={{ language, setLanguage }}>
      {children}
    </LanguageContextProvider>
  );
};

export default LanguageProvider;
