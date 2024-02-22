'use client';

import { LanguageProvider } from '@/utils/contexts/LanguageContext';

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};
