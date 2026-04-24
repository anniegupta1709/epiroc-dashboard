import React from "react";
import StatCard from "./StatCard";
import SpeedSlider from "./SpeedSlider";
import type { DashboardData } from "./Dashboard";

interface Props {
  data: DashboardData | null;
}

const MiddleRow: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div style={styles.row}>
      <StatCard label="Gear Ratio" value={data.gearRatio} />
      <StatCard label="Battery %" value={`${data.battery}%`} />
      <StatCard label="Temperature" value={`${data.temperature}°C`} />
      <StatCard label="RPM" value={data.rpm} />

      <SpeedSlider currentSpeed={data.speed} />
    </div>
  );
};

export default MiddleRow;

const styles: { [key: string]: React.CSSProperties } = {
  row: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 30
  }
};