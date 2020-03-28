import { NextPage } from 'next';
import Hero from '../components/Hero';
import MyCountryCases from '../components/MyCountryCases';

const Home: NextPage = () => (
  <>
    <Hero />
    <MyCountryCases />
  </>
);

export default Home;
