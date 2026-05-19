import DashboardCards from "./components/DashboardCards";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#0B0B0B",
        color: "white",
        minHeight: "100vh",
        padding: 40,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <button
        onClick={() => setMobileOpen(true)}
        style={{
          background: "#F5F5F5",
          color: "#0B0B0B",
          border: "none",
          padding: "12px 16px",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "32px",
        }}
      >
        ☰ Menu
      </button>

      <h1>AXIS HUB voltou</h1>
      <p>Sistema estabilizado com sidebar.</p>
      <DashboardCards />
    </div>
  );
}
