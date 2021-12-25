import React, { useEffect, useRef } from "react";
import { Fade, Fade as SlideShow } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./App.css";
import { AudioPlayer } from "./components/AudioPlayer";
import { BackgroundLights } from "./components/BackgroundLights";
import { IntroSlide } from "./components/IntroSlide";
import { SlideImage } from "./components/SlideImage";
import { Snowfall } from "./components/Snowfall";
import shuffle from "just-shuffle";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useKeyPress } from "./hooks/useKeyPress";

function importAll(r: any) {
  return r.keys().map(r);
}

const images: string[] = importAll(
  // @ts-ignore
  require.context("./images/69ers", false, /\.(png|jpe?g|svg)$/)
);
const shuffledImages = shuffle(images);

function App() {
  const handle = useFullScreenHandle();
  const slideShowRef = useRef<Fade>(null);
  const fPressed = useKeyPress("f");

  useEffect(() => {
    if (fPressed && !handle.active) {
      handle.enter();
    }
  }, [fPressed, handle]);

  const advanceSlide = () => {
    slideShowRef.current?.goNext();
  };

  const renderSlideImage = (slideImage: string, index: number) => (
    <SlideImage image={slideImage} key={index} onClick={advanceSlide} />
  );

  return (
    <FullScreen handle={handle}>
      <div
        className="App"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${require("./images/background/background02.jpeg")})`,
        }}
      >
        <BackgroundLights />
        <Snowfall />
        <SlideShow
          ref={slideShowRef}
          arrows={false}
          autoplay={true}
          pauseOnHover={false}
        >
          <IntroSlide onClick={advanceSlide} />
          {shuffledImages.map(renderSlideImage)}
        </SlideShow>
        <p
          style={{
            color: "#fff",
            fontFamily: "Waterfall",
            fontSize: "24pt",
            maxWidth: "70%",
            position: "absolute",
            top: 24,
            right: 24,
          }}
        >
          F = Full Screen
        </p>
        <AudioPlayer />
      </div>
    </FullScreen>
  );
}

export default App;
