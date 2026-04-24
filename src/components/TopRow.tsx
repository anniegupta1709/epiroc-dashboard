import React from "react";
import Indicator from "./Indicator";
import type { DashboardData } from "./Dashboard";

interface TopRowProps {
  data: DashboardData | null;
}

const TopRow: React.FC<TopRowProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div style={styles.row}>
      <Indicator label="Brake" active={data.brake} tooltip="Parking Brake Indicator" />
      <Indicator label="Check Engine" active={data.engineCheck} tooltip="Engine Check Indicator" />
      <Indicator label="Motor Status" active={data.rpm > 3000} tooltip="Motor Status Indicator" />
      <Indicator label="Battery Low" active={data.battery < 20} tooltip="Battery Low Indicator" />
    </div>
  );
};

export default TopRow;

const styles: { [key: string]: React.CSSProperties } = {
  row: {
    display: "flex",
    gap: 15,
    flexWrap: "wrap",
    marginBottom: 20
  }
};