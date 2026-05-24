import { useEffect, useState } from "react";

export default function RecoveryTrend() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const performance = JSON.parse(
    localStorage.getItem("axis-performance") || "{}"
  );

  const logs = JSON.parse(
    localStorage.getItem("axis-daily-logs") || "[]"
  );

  const currentRecovery = Number(performance.recovery || 80);

  const recoveryData =
    logs.length > 0
      ? logs.slice(-5).map((log) => Number(log.recovery || 0))
      : [
          Math.max(currentRecovery - 12, 45),
          Math.max(currentRecovery - 8, 50),
          Math.max(currentRecovery - 5, 55),
          Math.max(currentRecovery - 2, 60),
          currentRecovery,
        ];

  const latestRecovery =
    recoveryData[recoveryData.length - 1] || currentRecovery;

  const previousRecovery =
    recoveryData.length > 1
      ? recoveryData[recoveryData.length - 2]
      : latestRecovery;

  const trend =
    latestRecovery > previousRecovery
      ? "Improving Recovery"
      : latestRecovery < previousRecovery
      ? "Recovery Under Pressure"
      : "Stable Recovery";

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>RECOVERY TREND</p>

      <div style={header}>
        <h2 style={score}>{latestRecovery}%</h2>
        <p style={trendText}>{trend}</p>
      </div>

      <div style={chart}>
        {recoveryData.map((value, index) => (
          <div key={index} style={barContainer}>
            <div
              style={{
                ...bar,
                height: loaded ? `${value}%` : "0%",
                background:
                  value >= 80
                    ? "#86EFAC"
                    : value >= 65
                    ? "#FCD34D"
                    : "#FCA5A5",
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
  transition: "height 0.6s ease",
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
