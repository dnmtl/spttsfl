import { useEffect, useState } from "react";
import axios from "axios";

import { useSpotify } from "./useSpotify";

const useUserInfo = () => {
  const spotifyApi = useSpotify();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProfile() {
      try {
        const profile = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
          },
        });
        const data = profile.data;
        const isPremium = data.product === "premium";

        setProfile({ ...data, isPremium });
        setIsLoading(false);
      } catch (err) {
        setProfile(null);
        setError(err);
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);

  return { profile, error, isLoading };
};

export default useUserInfo;
