import React, { useRef } from "react";
import { Fade, Fade as SlideShow, SlideshowProps } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./App.css";
import { BackgroundLights } from "./components/BackgroundLights";
import { SlideImage } from "./components/SlideImage";

function importAll(r: any) {
  return r.keys().map(r);
}

const images = importAll(
  // @ts-ignore
  require.context("./images/69ers", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  const slideShowRef = useRef<Fade>(null);

  const advanceSlide = () => {
    slideShowRef.current?.goNext();
  };

  const renderSlideImage = (slideImage: string, index: number) => (
    <SlideImage image={slideImage} key={index} onClick={advanceSlide} />
  );

  return (
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
      <SlideShow ref={slideShowRef} arrows={false} autoplay={true}>
        {images.map(renderSlideImage)}
      </SlideShow>
    </div>
  );
}

export default App;
