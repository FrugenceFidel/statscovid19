import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/utils/contexts/providers';

export const metadata = {
  title: 'COVID-19 STATS',
  description:
    'Covid-19 | Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)',
  keywords: ['Next.js', 'React'],
  authors: [{ name: 'Frugence Fidel', url: 'https://frugencefidel.com' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <Header /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
