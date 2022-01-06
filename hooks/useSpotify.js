import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export const useSpotify = () => {
  const { data: session, status } = useSession();
  console.log("USESPOTIFY -> session: ", session);
  console.log("USESPOTIFY -> status: ", status);

  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      console.log("USESPOTIFY SPOTIFYAPI -> spotifyApi: ", spotifyApi);

      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};
