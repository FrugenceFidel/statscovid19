import {
  Inter,
  Karla,
  JetBrains_Mono,
  Quicksand,
  Righteous,
} from 'next/font/google';

export const quicksand = Quicksand({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const righteous = Righteous({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-righteous',
});
