import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import EvolutionChart from "./components/EvolutionChart";
import AxisState from "./components/AxisState";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
  <div
    style={{
      display: "flex",
      backgroundColor: "#0B0B0B",
      color: "#F5F5F5",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      flexWrap: "wrap",
    }}
  >
    <Sidebar mobileOpen={mobileOpen} />

    <main
  style={{
    flex: 1,
    padding: "48px",
    minWidth: "320px",
    marginLeft: "0",
  }}
>
      <button
  onClick={() => setMobileOpen(!mobileOpen)}
  style={{
  background: "#161616",
  border: "1px solid #242424",
  color: "#F5F5F5",
  padding: "10px 14px",
  borderRadius: "12px",
  marginBottom: "24px",
  cursor: "pointer",
  display: "block",
  position: "relative",
  zIndex: 2000,
}}
>
  ☰
</button>
      <p style={{ color: "#6B7280", marginBottom: "8px" }}>
        Human Performance Framework
      </p>

      <h1
        style={{
          fontSize: "44px",
          margin: 0,
          letterSpacing: "2px",
        }}
      >
        AXIS HUB
      </h1>

      <p
        style={{
          color: "#9CA3AF",
          marginTop: "14px",
        }}
      >
        Reconstrua o eixo. O corpo acompanha.
      </p>

      <DashboardCards />

      <EvolutionChart />

      <AxisState />
        </main>
  </div>
);
}
