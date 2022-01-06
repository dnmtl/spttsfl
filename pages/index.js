import { /* getSession,  */useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    // if the user is not "authenticated" then redirect/route to "/auth/signin" page
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/auth/signin");
    },
  });

  console.log("HOME -> session: ", session);
  console.log("HOME -> status: ", status);

  return (
    <>
      <Head>
        <title>Spotify - Dashboard</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"
        />
      </Head>

      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Center />
        </main>

        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   console.log("GETSERVERSIDEPROPS -> context: ", context);
//   const session = await getSession(context);
//   console.log("GETSERVERSIDEPROPS -> session: ", session);

//   return {
//     props: {
//       session,
//     },
//   };
// }
