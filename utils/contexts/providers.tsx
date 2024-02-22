'use client';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/components/styles/GlobalStyles';
import { LanguageProvider } from '@/utils/contexts/LanguageContext';
import theme from '@/lib/theme';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
