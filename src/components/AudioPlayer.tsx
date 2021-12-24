import { useRef, useState } from "react";
import Player from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

const songs = [
  require("../audio/winter_wonderland.mp3"),
  require("../audio/merry_little_xmas.mp3"),
];

export const AudioPlayer = () => {
  const [hovered, setHovered] = useState(false);
  const playerRef = useRef<Player | null>(null);
  const [songIndex, setSongIndex] = useState(0);
  const onEnded = () => {
    setSongIndex(songIndex === 0 ? 1 : 0);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: hovered ? 1 : 0.3,
        zIndex: 999,
        position: "absolute",
        bottom: 24,
        right: 24,
      }}
    >
      <Player
        ref={playerRef}
        autoPlay={true}
        src={songs[songIndex]}
        hasDefaultKeyBindings={false}
        showJumpControls={false}
        style={{
          width: "300px",
          borderRadius: 8,
        }}
        onEnded={onEnded}
        customAdditionalControls={[]}
      />
    </div>
  );
};
