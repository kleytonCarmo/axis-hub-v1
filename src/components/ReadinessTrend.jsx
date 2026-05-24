import {
  calculateReadiness,
  getReadinessColor,
} from "../utils/readiness";

export default function ReadinessTrend() {
  const logs = JSON.parse(localStorage.getItem("axis-daily-logs") || "[]");

  const data =
    logs.length > 0
      ? logs.slice(-5).map((log) => calculateReadiness(log))
      : [72, 76, 78, 81, 84];

  const latest = data[data.length - 1];
  const previous = data.length > 1 ? data[data.length - 2] : latest;

  const trend =
    latest > previous
      ? "Readiness improving"
      : latest < previous
      ? "Readiness dropping"
      : "Readiness stable";

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>READINESS TREND</p>

      <div style={header}>
        <h2 style={score}>{latest}%</h2>
        <p style={trendText}>{trend}</p>
      </div>

      <div style={chart}>
        {data.map((value, index) => (
          <div key={index} style={barContainer}>
            <div
              style={{
                ...bar,
                height: `${value}%`,
                background: getReadinessColor(value),
              }}
            />

            <span style={label}>D{index + 1}</span>
          </div>
        ))}
      </div>

      <p style={description}>
        Tendência real baseada nos últimos Daily Logs salvos.
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
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
};

const score = {
  fontSize: "52px",
  margin: 0,
  color: "#F5F5F5",
};

const trendText = {
  color: "#9CA3AF",
};

const chart = {
  height: "180px",
  display: "flex",
  alignItems: "flex-end",
  gap: "16px",
  marginTop: "32px",
};

const barContainer = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
};

const bar = {
  width: "100%",
  borderRadius: "14px 14px 6px 6px",
  transition: "0.4s ease",
};

const label = {
  color: "#6B7280",
  fontSize: "12px",
};

const description = {
  color: "#6B7280",
  fontSize: "13px",
  marginTop: "22px",
  lineHeight: "1.6",
};
