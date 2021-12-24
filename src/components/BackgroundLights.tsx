import "./BackgroundLights.scss";

const lights = new Array(250).fill(null);

export const BackgroundLights = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <div className="bokeh">
        {lights.map(() => (
          <div className="light"></div>
        ))}
      </div>
    </div>
  );
};
