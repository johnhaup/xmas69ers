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
  const [landscapeLayout, setLandscapeLayout] = useState<{
    width?: string | number;
    height?: string | number;
  }>({
    width: 0,
    height: 0,
  });
  const [isPortrait, setIsPortrait] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    const imageMeasuredPortrait =
      (imageRef.current?.clientHeight || 0) >=
      (imageRef.current?.clientWidth || 0);
    if (imageMeasuredPortrait !== isPortrait) {
      setIsPortrait(imageMeasuredPortrait);
    }

    if (!imageMeasuredPortrait) {
      const height = window.height * 0.96;
      const width =
        ((imageRef.current?.clientWidth || 0) /
          (imageRef.current?.clientHeight || 0)) *
        height;
      if (width >= window.width) {
        setLandscapeLayout({ width: "96%" });
      } else {
        setLandscapeLayout({ height, width });
      }
    }
  };

  useEffect(() => {
    setWindowIsPortrait(window.width <= window.height);
  }, [window.width, window.height]);

  const imageStyle =
    isPortrait && !windowIsPortrait ? { height: "96%" } : landscapeLayout;

  return (
    <div
      className="each-fade"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: window.height,
        width: window.width,
      }}
    >
      <img
        onClick={onClick}
        ref={imageRef}
        src={image}
        style={imageStyle}
        onLoad={onLoad}
        alt={"slide"}
      />
    </div>
  );
};
