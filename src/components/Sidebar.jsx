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
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 999,
          }}
        />
      )}

      <aside
        style={{
          width: "250px",
          background: "linear-gradient(180deg, #111111, #0B0B0B)",
          minHeight: "100vh",
          padding: "32px 22px",
          borderRight: "1px solid #242424",
          position: "fixed",
          left: mobileOpen ? "0" : "0",
          top: 0,
          transition: "0.3s ease",
          zIndex: 1000,
          boxShadow: mobileOpen ? "20px 0 60px rgba(0,0,0,0.45)" : "none",
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

        <div style={{ marginBottom: "42px" }}>
          <h2
            style={{
              color: "#F5F5F5",
              margin: 0,
              letterSpacing: "3px",
              fontSize: "24px",
            }}
          >
            AXIS
          </h2>

          <p
            style={{
              color: "#6B7280",
              fontSize: "12px",
              marginTop: "8px",
            }}
          >
            Human Performance OS
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {items.map((item) => {
            const active = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{
                  background: active ? "#F5F5F5" : "transparent",
                  color: active ? "#0B0B0B" : "#9CA3AF",
                  border: active ? "1px solid #F5F5F5" : "1px solid transparent",
                  textAlign: "left",
                  padding: "13px 14px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: active ? "bold" : "normal",
                  transition: "0.2s ease",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "22px",
            right: "22px",
            borderTop: "1px solid #242424",
            paddingTop: "18px",
          }}
        >
          <p style={{ color: "#6B7280", fontSize: "12px", margin: 0 }}>
            AXIS v1
          </p>
          <p style={{ color: "#9CA3AF", fontSize: "13px", marginTop: "6px" }}>
            Operação em construção.
          </p>
        </div>
      </aside>
    </>
  );
}
