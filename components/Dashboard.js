import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import SpotifyWebApi from "spotify-web-api-node";

import { playingTrack } from "../atoms/track";
import FreePlayer from "./Player/FreePlayer";
import PremiumPlayer from "./Player/PremiumPlayer";
import Sidebar from "./Sidebar";
import UserDropdown from "./UserDropdown";
import CurrentPlaylist from "./CurrentPlaylist";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

const Dashboard = () => {
  const { data: session } = useSession();
  console.log("DASHBOARD -> session: ", session);
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
    // <main className="flex relative min-h-screen min-w-max">
    <>
      {/* <Blobby /> */}
      <Sidebar />
      {/* <CurrentPlaylist /> */}
      <UserDropdown />

      <div className="fixed bottom-0 left-0 right-0 z-50">
        {session.user.isPremium ? (
          <PremiumPlayer accessToken={accessToken} trackUri={currentTrack} />
        ) : (
          <FreePlayer accessToken={accessToken} trackUri={currentTrack} />
        )}
      </div>

      {/* {showPlayer && (
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <FreePlayer accessToken={accessToken} trackUri={currentTrack} />
          </div>
        )} */}
    </>
    // </main>
  );
};

export default Dashboard;
