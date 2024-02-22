import { FC } from 'react';
import Hero from '@/components/Hero';
import MyCountryCases from '@/components/MyCountryCases';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <MyCountryCases />
    </>
  );
};

export default Home;
