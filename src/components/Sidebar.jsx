export default function Sidebar({ <Sidebar
  export default function Sidebar({
  mobileOpen,
  setMobileOpen,
  activePage,
  setActivePage,
}) {
  const items = [
    { id: "dashboard", label: "Dashboard" },
    { id: "body", label: "Body Metrics" },
    { id: "performance", label: "Performance" },
    { id: "calories", label: "Calories" },
    { id: "evolution", label: "Evolution" },
    { id: "state", label: "Axis State" },
  ];

  function handleClick(id) {
    setActivePage(id);
    setMobileOpen(false);
  }

  return (
    <>
      {mobileOpen && (
      const [activePage, setActivePage] = useState("dashboard");
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

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                background: activePage === item.id ? "#F5F5F5" : "transparent",
                color: activePage === item.id ? "#0B0B0B" : "#9CA3AF",
                border: "none",
                textAlign: "left",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: activePage === item.id ? "bold" : "normal",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
