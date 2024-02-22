import Footer from '@/components/Footer';
import Header from '@/components/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { Providers } from '@/utils/contexts/providers';
import { quicksand, righteous } from '@/utils/fonts';

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
    <html lang="en" className={`${quicksand.variable} ${righteous.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
