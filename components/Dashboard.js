import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";

import { playingTrack } from "../atoms/track";
import FreePlayer from "./Player/FreePlayer";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

const Dashboard = () => {
  const { data: session } = useSession();
  const { accessToken } = session;

  const [currentTrack, setCurrentTrack] = useRecoilState(playingTrack);
  const [showPlayer, setShowPlayer] = useState(false);

  const chooseTrack = (track) => {
    setCurrentTrack(track);
  };

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white"
          onClick={signOut}
        >
            <div>logout</div>
          {/* <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt="user"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" /> */}
        </div>
      </header>

      {showPlayer && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <FreePlayer accessToken={accessToken} trackUri={currentTrack} />
        </div>
      )}
    </main>
  );
};

export default Dashboard;
