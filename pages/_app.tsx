import 'styles/global.css';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Oxygen } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={oxygen.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
