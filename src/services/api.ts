import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "https://localhost:5095/api";

// Get dashboard data
export const getDashboard = () => {
  return axios.get(API_BASE + "/dashboard");
};

//Update vehicle speed
export const updateSpeed = (speed: number) => {
  console.log("Updating speed to:", speed);
  return axios.post(`${API_BASE}/dashboard/speed`,  speed , {
    headers: { "Content-Type": "application/json" }
  });
};

// Toggle charging system
export const toggleCharge = () => {
  return axios.post(`${API_BASE}/dashboard/charge`);
};