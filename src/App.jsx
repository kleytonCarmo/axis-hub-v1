import { getStorage, setStorage, STORAGE_KEYS } from "./lib/storage";
import OperationalTimeline from "./components/OperationalTimeline";
import ReadinessTrend from "./components/ReadinessTrend";
import DailyLogHistory from "./components/DailyLogHistory";
import DailyLog from "./components/DailyLog";
import RecoveryTrend from "./components/RecoveryTrend";
import WeeklyReadiness from "./components/WeeklyReadiness";
import ProtocolRecommendation from "./components/ProtocolRecommendation";
import Protocol from "./components/Protocol";
import TrainingMode from "./components/TrainingMode";
import DashboardInsight from "./components/DashboardInsight";
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

  const [checkpoints, setCheckpoints] = useState(() =>
  getStorage(STORAGE_KEYS.checkpoints, defaultCheckpoints)
);

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
        className="axis-main"
        style={{
          padding: "32px",
          minWidth: "320px",
          maxWidth: "1180px",
          margin: "0 auto",
          marginLeft: "270px",
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
  <div className="fade-page">
    <DashboardCards />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
      }}
    >
      <DashboardCards />
<AxisIndex />
<WeeklyReadiness />
<RecoveryTrend />
<ReadinessTrend />
<ProtocolRecommendation />
<TrainingMode />
<DailyLog />
<DailyLogHistory />
<OperationalTimeline />
<DashboardInsight />
    </div>
  </div>
)}

        {activePage === "body" && (
          <div className="fade-page">
            <BodyMetrics
              checkpoints={checkpoints}
              setCheckpoints={setCheckpoints}
            />
          </div>
        )}

        {activePage === "performance" && (
          <div className="fade-page">
            <PerformanceMetrics />
          </div>
        )}

        {activePage === "calories" && (
          <div className="fade-page">
            <CalorieTracker />
          </div>
        )}

        {activePage === "protocol" && (
  <div className="fade-page">
    <Protocol />
  </div>
)}
        {activePage === "evolution" && (
          <div className="fade-page">
            <EvolutionChart checkpoints={checkpoints} />
          </div>
        )}

        {activePage === "state" && (
          <div className="fade-page">
            <AxisState />
          </div>
        )}
      </main>
    </div>
  );
}
