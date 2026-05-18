export default function Sidebar({ mobileOpen }) {
  return (
    <div
      style={{
        width: "220px",
        background: "#111111",
        minHeight: "100vh",
        padding: "30px 20px",
        borderRight: "1px solid #1F1F1F",

        position: window.innerWidth < 768 ? "fixed" : "relative",
        left:
          window.innerWidth < 768
            ? mobileOpen
              ? "0"
              : "-260px"
            : "0",

        top: 0,
        transition: "0.3s ease",
        zIndex: 1000,
      }}
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
