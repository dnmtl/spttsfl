import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { currentTrackIdState } from "../atoms/songAtom";
import { useSpotify } from "./useSpotify";

export const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [song, setSong] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSong() {
      try {
        const { body: track } = await spotifyApi.getMyCurrentPlayingTrack();
        const { body: recentTracks } =
          await spotifyApi.getMyRecentlyPlayedTracks();

        const trackInfo = track || { item: recentTracks.items[0].track };

        setSong(trackInfo);
        setIsLoading(false);
      } catch (err) {
        setSong(null);
        setError(err);
        setIsLoading(false);
      }
    }

    setIsLoading(true);
    fetchSong();
  }, []);

  return { song, error, isLoading };
};

// export const useSongInfo = () => {
//   const spotifyApi = useSpotify();
//   const [currentTrackId, setCurrentTrackId] =
//     useRecoilState(currentTrackIdState);

//   const [songInfo, setSongInfo] = useState(null);

//   useEffect(() => {
//     const fetchSongInfo = async () => {
//       console.log('USESONGINFO -> currentTrackId: ', currentTrackId);
//       if (currentTrackId) {
//         const trackInfo = await fetch(
//           `https://api.spotify.com/v1/tracks/${currentTrackId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
//             },
//           }
//         ).then((res) => res.json());

//         setSongInfo(trackInfo);
//       }
//     };

//     fetchSongInfo();
//   }, [currentTrackId]);

//   return songInfo;
// };
