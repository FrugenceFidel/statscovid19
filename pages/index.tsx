import { NextPage } from 'next';
import Hero from '../components/Hero';
import CountryCases from '../components/CountryCases';

const Home: NextPage = () => (
  <>
    <Hero />
    <CountryCases />
  </>
);

export default Home;
