export default function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 999,
          }}
        />
      )}

      <aside
        style={{
          width: "240px",
          background: "#111111",
          minHeight: "100vh",
          padding: "30px 20px",
          borderRight: "1px solid #1F1F1F",
          position: "fixed",
          left: mobileOpen ? "0" : "-280px",
          top: 0,
          transition: "0.3s ease",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            background: "transparent",
            color: "#F5F5F5",
            border: "none",
            fontSize: "22px",
            float: "right",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h2 style={{ color: "#F5F5F5", marginBottom: "40px", letterSpacing: "2px" }}>
          AXIS
        </h2>

        <div style={{ color: "#9CA3AF", display: "flex", flexDirection: "column", gap: "20px" }}>
          <span>Dashboard</span>
          <span>Evolution</span>
          <span>Performance</span>
          <span>Execution</span>
          <span>Protocol</span>
        </div>
      </aside>
    </>
  );
}
