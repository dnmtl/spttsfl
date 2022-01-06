import { atom } from "recoil";

export const playingTrack = atom({
  key: "playingTrack",
  default: null,
});

export const isTrackPlaying = atom({
  key: "isTrackPlaying",
  default: false,
});
