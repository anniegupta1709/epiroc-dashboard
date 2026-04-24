import React from "react";

interface GaugeProps {
  label: string;
  value: number;
  max: number;
  unit?: string;
  tooltip?: string;
}

const Gauge: React.FC<GaugeProps> = ({ label, value, max, unit, tooltip }) => {
  const percentage = Math.min((value / max) * 100, 100);

  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div style={styles.container} title={tooltip}>
      <svg height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <circle
          stroke="#eee"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        <circle
          stroke="#4caf50"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease"
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/* Value */}
      <div style={styles.text}>
        <div>{value}{unit}</div>
        <small>{label}</small>
      </div>
    </div>
  );
};

export default Gauge;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    width: 140,
    height: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold"
  }
};