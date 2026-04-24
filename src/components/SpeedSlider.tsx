import React, { useState } from "react";
import { updateSpeed } from "../services/api";

interface Props {
  currentSpeed: number;
}

const SpeedSlider: React.FC<Props> = ({ currentSpeed }) => {
  const [speed, setSpeed] = useState(currentSpeed);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSpeed(value);
    await updateSpeed(value);
  };

  return (
    <div style={styles.container}>
      <h4>Motor Speed</h4>

      <input
        type="range"
        min={0}
        max={100}
        value={speed}
        onChange={handleChange}
      />

      <p>{speed}</p>
    </div>
  );
};

export default SpeedSlider;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 15,
    border: "1px solid #ccc",
    borderRadius: 10,
    width: 200,
    textAlign: "center"
  }
};