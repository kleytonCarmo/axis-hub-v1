export default function DailyLogHistory() {
  const logs = JSON.parse(localStorage.getItem("axis-daily-logs") || "[]");

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>DAILY HISTORY</p>
      <h2 style={title}>Histórico operacional</h2>

      {logs.length === 0 ? (
        <p style={text}>Nenhum registro diário salvo ainda.</p>
      ) : (
        <div style={list}>
          {logs.slice(-5).reverse().map((log, index) => (
            <div key={index} style={item}>
              <strong>{log.date}</strong>
              <span>Recovery: {log.recovery}%</span>
              <span>Sleep: {log.sleep}h</span>
              <span>Energia: {log.energy}/10</span>
              <span>Foco: {log.focus}/10</span>
              <span>Strain: {log.strain}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const box = {
  marginTop: "28px",
  background: "#161616",
  border: "1px solid #242424",
  borderRadius: "24px",
  padding: "28px",
};

const eyebrow = { color: "#9CA3AF", marginBottom: "8px" };
const title = { margin: 0, color: "#F5F5F5" };
const text = { color: "#D1D5DB", marginTop: "18px" };

const list = {
  display: "grid",
  gap: "12px",
  marginTop: "22px",
};

const item = {
  background: "#111111",
  border: "1px solid #242424",
  borderRadius: "16px",
  padding: "16px",
  display: "grid",
  gap: "6px",
  color: "#D1D5DB",
};
