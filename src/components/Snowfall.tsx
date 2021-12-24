import "./Snowfall.scss";

const flakes = new Array(50).fill(null);

export const Snowfall = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      {flakes.map((_, i) => (
        <div className="snowflake" key={i}></div>
      ))}
    </div>
  );
};
