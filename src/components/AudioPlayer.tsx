import { useState } from "react";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

const songs = [
  require("../audio/winter_wonderland.mp3"),
  require("../audio/merry_little_xmas.mp3"),
];

export const AudioPlayer = () => {
  const [songIndex, setSongIndex] = useState(0);
  const onEnded = () => {
    setSongIndex(songIndex === 0 ? 1 : 0);
  };

  return (
    <Player
      autoPlay
      src={songs[songIndex]}
      hasDefaultKeyBindings={false}
      showJumpControls={false}
      style={{
        position: "absolute",
        bottom: 24,
        right: 24,
        width: "300px",
        zIndex: 999,
      }}
      onEnded={onEnded}
      customAdditionalControls={[]}
    />
  );
};
