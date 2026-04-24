import React, { useEffect, useState } from "react";
import TopRow from "./TopRow";
import GaugesRow from "./GaugesRow";
import { getDashboard } from "../services/api";
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";

// ✅ Type for your dashboard data
export interface DashboardData {
  id: string;
  rpm: number;
  battery: number;
  temperature: number;
  power: number;
  gearRatio: number;
  speed: number;
  isCharging: boolean;
  brake: boolean;
  engineCheck: boolean;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  // Fetch data every 2 seconds
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const res = await getDashboard();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Vehicle Dashboard</h1>
      <TopRow data={data} />
      <GaugesRow data={data} />
      <MiddleRow data={data} />
      <BottomRow data={data} refresh={fetchData} />
    </div>
  );
};

export default Dashboard;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: 20,
    fontFamily: "Arial, sans-serif"
  }
};