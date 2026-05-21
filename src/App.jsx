import AxisIndex from "./components/AxisIndex";
import PerformanceMetrics from "./components/PerformanceMetrics";
import CalorieTracker from "./components/CalorieTracker";
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import EvolutionChart from "./components/EvolutionChart";
import AxisState from "./components/AxisState";
import BodyMetrics from "./components/BodyMetrics";

const defaultCheckpoints = [
  {
    date: "Semana 1",
    bodyFat: 15,
    waist: 81,
    leanMass: 58,
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

const [activePage, setActivePage] = useState("dashboard");

  const [checkpoints, setCheckpoints] = useState(() => {
    const saved = localStorage.getItem("axis-checkpoints");

    if (!saved) {
      return defaultCheckpoints;
    }

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return defaultCheckpoints;
    }

    return parsed;
  });

  useEffect(() => {
    localStorage.setItem("axis-checkpoints", JSON.stringify(checkpoints));
  }, [checkpoints]);

  return (
    <div
      style={{
        backgroundColor: "#0B0B0B",
        color: "#F5F5F5",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      const [mobileOpen, setMobileOpen] = useState(false);

const [activePage, setActivePage] = useState("dashboard");
      <main
        style={{
          padding: "32px",
          minWidth: "320px",
        }}
      >
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            background: "#F5F5F5",
            color: "#0B0B0B",
            border: "none",
            padding: "12px 16px",
            borderRadius: "12px",
            marginBottom: "24px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          ☰ Menu
        </button>

        <p style={{ color: "#6B7280", marginBottom: "8px" }}>
          Human Performance Framework
        </p>

        <h1 style={{ fontSize: "44px", margin: 0, letterSpacing: "2px" }}>
          AXIS HUB
        </h1>

        <p style={{ color: "#9CA3AF", marginTop: "14px" }}>
          Reconstrua o eixo. O corpo acompanha.
        </p>

        <DashboardCards />

<AxisIndex />

<BodyMetrics
  checkpoints={checkpoints}
  setCheckpoints={setCheckpoints}
/>

<PerformanceMetrics />

<CalorieTracker />

<EvolutionChart checkpoints={checkpoints} />

<AxisState />
      </main>
    </div>
  );
}
