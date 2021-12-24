import { useEffect, useRef, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const SlideImage = ({
  image,
  onClick,
}: {
  image: string;
  onClick?: () => void;
}) => {
  const window = useWindowDimensions();
  const [windowIsPortrait, setWindowIsPortrait] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    setIsPortrait(
      (imageRef.current?.clientHeight || 0) >=
        (imageRef.current?.clientWidth || 0)
    );
  };

  useEffect(() => {
    setWindowIsPortrait(window.width <= window.height);
  }, [window.width, window.height]);

  const imageStyle =
    isPortrait && !windowIsPortrait
      ? { height: "96%" }
      : { width: window.width };

  console.log(window.width, window.height);

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
      {/* <div
        style={{
          display: "flex",
          
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
      <img
        ref={imageRef}
        src={image}
        style={imageStyle}
        onLoad={onLoad}
        alt={"slide"}
      />
      {/* </div> */}
    </div>
  );
};
