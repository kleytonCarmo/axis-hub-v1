import TopBar from "./components/TopBar";
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
    <Sidebar
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
      activePage={activePage}
      setActivePage={setActivePage}
    />

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

        <TopBar activePage={activePage} />

        {activePage === "dashboard" && (
  <>
    <DashboardCards />
    <AxisIndex />
  </>
)}

{activePage === "body" && (
  <BodyMetrics
    checkpoints={checkpoints}
    setCheckpoints={setCheckpoints}
  />
)}

{activePage === "performance" && <PerformanceMetrics />}

{activePage === "calories" && <CalorieTracker />}

{activePage === "evolution" && (
  <EvolutionChart checkpoints={checkpoints} />
)}

{activePage === "state" && <AxisState />}
      </main>
    </div>
  );
}
