import React from "react";
import "react-slideshow-image/dist/styles.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./IntroSlide.css";

export const IntroSlide = ({ onClick }: { onClick?: () => void }) => {
  const window = useWindowDimensions();
  return (
    <div
      onClick={onClick}
      className="each-fade"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: window.height,
        width: window.width,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "red",
          opacity: 0.4,
        }}
      />
      <p
        className="intro"
        style={{
          color: "#fff",
          fontFamily: "Waterfall",
          fontSize: "72pt",
          maxWidth: "70%",
          zIndex: 999,
        }}
      >
        Merry Christmas and a Happy New Year to all the 69ers!
      </p>
    </div>
  );
};
