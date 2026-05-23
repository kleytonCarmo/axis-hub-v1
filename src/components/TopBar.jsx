export default function TopBar({ activePage }) {
  const titles = {
  dashboard: "Dashboard",
  body: "Body Metrics",
  performance: "Performance",
  calories: "Calories",
  protocol: "Protocol",
  evolution: "Evolution",
  state: "Axis State",
};

  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return (
    <div style={bar}>
      <div>
        <p style={eyebrow}>AXIS HUB</p>
        <h1 style={title}>{titles[activePage]}</h1>
        <p style={subtitle}>Reconstrua o eixo. O corpo acompanha.</p>
      </div>

      <div style={statusBox}>
        <span style={statusDot} />
        <div>
          <p style={statusLabel}>Status</p>
          <strong style={statusText}>Operacional</strong>
        </div>
      </div>

      <p style={date}>{today}</p>
    </div>
  );
}

const bar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  marginBottom: "32px",
  flexWrap: "wrap",
};

const eyebrow = {
  color: "#6B7280",
  marginBottom: "8px",
  fontSize: "13px",
};

const title = {
  fontSize: "42px",
  margin: 0,
  letterSpacing: "1.5px",
};

const subtitle = {
  color: "#9CA3AF",
  marginTop: "12px",
};

const statusBox = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  background: "#161616",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "14px 18px",
};

const statusDot = {
  width: "10px",
  height: "10px",
  borderRadius: "999px",
  background: "#86EFAC",
};

const statusLabel = {
  color: "#6B7280",
  margin: 0,
  fontSize: "12px",
};

const statusText = {
  color: "#F5F5F5",
};

const date = {
  color: "#6B7280",
  fontSize: "13px",
};
