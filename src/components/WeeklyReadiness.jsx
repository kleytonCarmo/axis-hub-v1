export default function WeeklyReadiness() {
  const performance = JSON.parse(localStorage.getItem("axis-performance") || "{}");
  const week = JSON.parse(localStorage.getItem("axis-calorie-week") || "[]");

  const recovery = Number(performance.recovery || 80);
  const sleep = Number(performance.sleep || 7.5);
  const energy = Number(performance.energy || 8);
  const focus = Number(performance.focus || 8);
  const strain = Number(performance.strain || 12);

  const totalBurn = week.reduce((sum, day) => sum + Number(day.total || 0), 0);
  const totalIntake = week.reduce((sum, day) => sum + Number(day.intake || 0), 0);
  const balance = totalIntake - totalBurn;

  const sleepScore = Math.min(100, (sleep / 8) * 100);
  const energyScore = energy * 10;
  const focusScore = focus * 10;
  const strainScore = strain > 16 ? 60 : strain > 12 ? 75 : 90;
  const balanceScore = balance < 0 ? 85 : 60;

  const readiness = Math.round(
    recovery * 0.3 +
      sleepScore * 0.2 +
      energyScore * 0.15 +
      focusScore * 0.15 +
      strainScore * 0.1 +
      balanceScore * 0.1
  );

  const trend =
    readiness >= 85
      ? "↑ alta prontidão"
      : readiness >= 70
      ? "→ estável"
      : readiness >= 55
      ? "↓ atenção"
      : "↓ recuperação necessária";

  const status =
    readiness >= 85
      ? "High Operational Readiness"
      : readiness >= 70
      ? "Stable Readiness"
      : readiness >= 55
      ? "Controlled Stress"
      : "Recovery Priority";

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>WEEKLY READINESS</p>

      <div style={header}>
        <h2 style={score}>{readiness}%</h2>

        <div>
          <p style={statusText}>{status}</p>
          <p style={trendText}>{trend}</p>
        </div>
      </div>

      <div style={bar}>
        <div style={{ ...fill, width: `${readiness}%` }} />
      </div>

      <p style={description}>
        Leitura semanal baseada em recovery, sono, energia, foco, strain e balanço energético.
      </p>
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

const header = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  flexWrap: "wrap",
};

const score = {
  fontSize: "56px",
  margin: 0,
  color: "#F5F5F5",
};

const statusText = {
  color: "#F5F5F5",
  fontSize: "18px",
  margin: 0,
};

const trendText = {
  color: "#9CA3AF",
  marginTop: "8px",
};

const bar = {
  height: "12px",
  background: "#0B0B0B",
  borderRadius: "999px",
  overflow: "hidden",
  marginTop: "24px",
};

const fill = {
  height: "100%",
  background: "#F5F5F5",
  borderRadius: "999px",
  transition: "0.3s ease",
};

const description = {
  color: "#6B7280",
  fontSize: "13px",
  marginTop: "18px",
  lineHeight: "1.6",
};
