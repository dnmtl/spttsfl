import { getSession } from "next-auth/react";
import Head from "next/head";

// import Sidebar from "../components/Sidebar";
// import Center from "../components/Center";
// import Player from "../components/Player";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Spotify - Dashboard</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"
        />
      </Head>

      <Dashboard />

      {/* <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Center />
        </main>

        <div className="sticky bottom-0">
          <Player />
        </div>
      </div> */}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const currentUser = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  }).then((res) => res.json());

  const isUserPremium = currentUser.product === "premium";

  return {
    props: {
      session: {
        ...session,
        user: { ...session.user, isPremium: isUserPremium },
      },
    },
  };
}
