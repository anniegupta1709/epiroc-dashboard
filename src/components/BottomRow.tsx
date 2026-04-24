import React, { useState } from "react";
import { toggleCharge } from "../services/api";
import type { DashboardData } from "./Dashboard";

interface Props {
  data: DashboardData | null;
  refresh: () => void;
}

const BottomRow: React.FC<Props> = ({ data, refresh }) => {
  const [loading, setLoading] = useState(false);

  if (!data) return null;

  const handleCharge = async () => {
    try {
      setLoading(true);
      await toggleCharge();
      refresh(); // refresh dashboard data
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* 🔹 Navigation Buttons (dummy) */}
      <div style={styles.group}>
        <button style={styles.button}>Gear</button>
        <button style={styles.button}>Motor</button>
        <button style={styles.button}>Battery Temp</button>
        <button style={styles.button}>View Menu</button>
      </div>

      {/* 🔥 Charging Button */}
      <div style={styles.group}>
        <button
          onClick={handleCharge}
          style={{
            ...styles.button,
            backgroundColor: data.isCharging ? "green" : "#444",
            color: "white"
          }}
          disabled={loading}
        >
          {loading
            ? "Updating..."
            : data.isCharging
            ? "Charging ON"
            : "Charging OFF"}
        </button>
      </div>
    </div>
  );
};

export default BottomRow;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
    flexWrap: "wrap",
    gap: 20
  },
  group: {
    display: "flex",
    gap: 10
  },
  button: {
    padding: "10px 15px",
    borderRadius: 8,
    border: "none",
    backgroundColor: "#ddd",
    cursor: "pointer"
  }
};