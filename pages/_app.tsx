import { AppProps } from 'next/app';
import MyLayout from '../components/MyLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
