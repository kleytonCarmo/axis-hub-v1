import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";

export default function App() {
  return (
  <div
    style={{
      display: "flex",
      backgroundColor: "#0B0B0B",
      color: "#F5F5F5",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <Sidebar />

    <main style={{ flex: 1, padding: "48px" }}>
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
    </main>
  </div>
);
}
