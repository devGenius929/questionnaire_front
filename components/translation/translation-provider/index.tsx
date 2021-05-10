import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import messages from '../../../locales/messages';

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const language = router.locale;
  return (
    <IntlProvider locale={router.locale} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
};
