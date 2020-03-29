import { AppProps } from 'next/app';
import MyLayout from '../components/MyLayout';
import '../public/empty.css'; // fix not redirect

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  );
}

export default MyApp;
