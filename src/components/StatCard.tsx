import React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div style={styles.card}>
      <h4 style={styles.label}>{label}</h4>
      <p style={styles.value}>{value}</p>
    </div>
  );
};

export default StatCard;

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    padding: 15,
    border: "1px solid #ccc",
    borderRadius: 10,
    width: 140,
    textAlign: "center",
    background: "#f9f9f9"
  },
  label: {
    margin: 0,
    fontSize: 14,
    color: "#555"
  },
  value: {
    margin: 0,
    fontSize: 20,
    fontWeight: "bold"
  }
};