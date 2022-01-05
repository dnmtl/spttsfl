import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  console.log('MYAPP -> session: ', session);
  console.log('MYAPP -> pageProps: ', pageProps);
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
