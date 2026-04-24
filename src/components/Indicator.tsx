import React from "react";

interface IndicatorProps {
  label: string;
  active: boolean;
  tooltip?: string;
}

export default function Indicator({ label, active, tooltip }: IndicatorProps) {
  return (
    <div style={styles.box} title={tooltip}>
      <div
        style={{
          ...styles.light,
          backgroundColor: active ? "green" : "red",
        }}
      />
      <p style={styles.text}>{label}</p>
    </div>
  );
}

const styles: {
  box: React.CSSProperties;
  light: React.CSSProperties;
  text: React.CSSProperties;
} = {
  box: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: 8,
    width: 180,
  },
  light: {
    width: 12,
    height: 12,
    borderRadius: "50%",
  },
  text: {
    margin: 0,
    fontSize: 14,
  },
};