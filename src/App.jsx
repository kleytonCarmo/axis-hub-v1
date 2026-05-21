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

const pageTransition = {
  animation: "fade 0.25s ease",
};

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
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <button
          onClick={() => setMobileOpen(true)}
          style={{
            background: "#161616",
            color: "#F5F5F5",
            border: "1px solid #242424",
            padding: "12px 16px",
            borderRadius: "14px",
            marginBottom: "24px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            position: "sticky",
            top: "16px",
            zIndex: 500,
          }}
        >
          ☰ Menu
        </button>

        <TopBar activePage={activePage} />

        {activePage === "dashboard" && (
          <div style={pageTransition}>
            <DashboardCards />
            <AxisIndex />
          </div>
        )}

        {activePage === "body" && (
          <div style={pageTransition}>
            <BodyMetrics
              checkpoints={checkpoints}
              setCheckpoints={setCheckpoints}
            />
          </div>
        )}

        {activePage === "performance" && (
          <div style={pageTransition}>
            <PerformanceMetrics />
          </div>
        )}

        {activePage === "calories" && (
          <div style={pageTransition}>
            <CalorieTracker />
          </div>
        )}

        {activePage === "evolution" && (
          <div style={pageTransition}>
            <EvolutionChart checkpoints={checkpoints} />
          </div>
        )}

        {activePage === "state" && (
          <div style={pageTransition}>
            <AxisState />
          </div>
        )}
      </main>
    </div>
  );
}
