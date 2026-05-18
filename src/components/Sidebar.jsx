export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#111111",
        minHeight: "100vh",
        padding: "30px 20px",
        borderRight: "1px solid #1F1F1F",
      }}
      className="sidebar"
    >
      <h2
        style={{
          color: "#F5F5F5",
          marginBottom: "40px",
          letterSpacing: "2px",
        }}
      >
        AXIS
      </h2>

      <div
        style={{
          color: "#9CA3AF",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <span>Dashboard</span>
        <span>Evolution</span>
        <span>Performance</span>
        <span>Execution</span>
        <span>Protocol</span>
      </div>
    </div>
  );
}
