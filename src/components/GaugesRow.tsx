import React from "react";
import Gauge from "./Gauge";
import type { DashboardData } from "./Dashboard";

interface Props {
  data: DashboardData | null;
}

const GaugesRow: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div style={styles.row}>
      <Gauge
        label="Power"
        value={data.power}
        max={200}
        unit="kW"
        tooltip="Power Gauge"
      />
        <Gauge
        label="RPM"
        value={data.rpm}
        max={6000}
        unit=""
        tooltip="Motor PM Gauge"
      />
    </div>
  );
};

export default GaugesRow;

const styles: { [key: string]: React.CSSProperties } = {
  row: {
    display: "flex",
    gap: 30,
    marginBottom: 30
  }
};