export default function OperationalTimeline() {
  const logs = JSON.parse(localStorage.getItem("axis-daily-logs") || "[]");

  function calculateReadiness(log) {
    const recovery = Number(log.recovery || 80);
    const sleepScore = Math.min(100, (Number(log.sleep || 7.5) / 8) * 100);
    const energyScore = Number(log.energy || 8) * 10;
    const focusScore = Number(log.focus || 8) * 10;
    const strain = Number(log.strain || 12);
    const strainScore = strain > 16 ? 60 : strain > 12 ? 75 : 90;

    return Math.round(
      recovery * 0.35 +
        sleepScore * 0.2 +
        energyScore * 0.15 +
        focusScore * 0.15 +
        strainScore * 0.15
    );
  }

  function getMode(log) {
    const recovery = Number(log.recovery || 80);
    const sleep = Number(log.sleep || 7.5);
    const strain = Number(log.strain || 12);
    const energy = Number(log.energy || 8);

    if (recovery < 60 || sleep < 6.5) return "Recovery Mode";
    if (strain > 16 && recovery < 75) return "Control Mode";
    if (energy <= 5) return "Rebuild Mode";

    return "Performance Mode";
  }

  const recentLogs = logs.slice(-7).reverse();

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>OPERATIONAL TIMELINE</p>
      <h2 style={title}>Linha do tempo fisiológica</h2>

      {recentLogs.length === 0 ? (
        <p style={text}>Nenhum Daily Log salvo ainda.</p>
      ) : (
        <div style={list}>
          {recentLogs.map((log, index) => {
            const readiness = calculateReadiness(log);
            const mode = getMode(log);

            const color =
              readiness >= 85
                ? "#86EFAC"
                : readiness >= 70
                ? "#FCD34D"
                : "#FCA5A5";

            return (
              <div key={index} style={item}>
                <div style={{ ...dot, background: color }} />

                <div>
                  <strong style={date}>{log.date}</strong>

                  <p style={modeStyle}>{mode}</p>

                  <div style={metrics}>
                    <span>Readiness: {readiness}%</span>
                    <span>Recovery: {log.recovery}%</span>
                    <span>Sleep: {log.sleep}h</span>
                    <span>Energy: {log.energy}/10</span>
                    <span>Strain: {log.strain}</span>
                  </div>
                </div>
              </div>
            );
          })}
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

const eyebrow = {
  color: "#9CA3AF",
  marginBottom: "8px",
};

const title = {
  margin: 0,
  color: "#F5F5F5",
};

const text = {
  color: "#D1D5DB",
  marginTop: "18px",
};

const list = {
  display: "grid",
  gap: "16px",
  marginTop: "24px",
};

const item = {
  display: "grid",
  gridTemplateColumns: "18px 1fr",
  gap: "14px",
  background: "#111111",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "18px",
};

const dot = {
  width: "12px",
  height: "12px",
  borderRadius: "999px",
  marginTop: "5px",
};

const date = {
  color: "#F5F5F5",
};

const modeStyle = {
  color: "#9CA3AF",
  marginTop: "6px",
  marginBottom: "12px",
};

const metrics = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  color: "#D1D5DB",
  fontSize: "13px",
};
