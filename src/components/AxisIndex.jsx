import { useEffect, useState } from "react";

const defaultPerformance = {
  recovery: 80,
  sleep: 7.5,
  strain: 12,
  cardio: 30,
  energy: 8,
  focus: 8,
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function getPerformance() {
  const saved = localStorage.getItem("axis-performance");
  return saved ? JSON.parse(saved) : defaultPerformance;
}

function getWeeklyBalanceScore() {
  const savedCalories = localStorage.getItem("axis-calorie-week");
  const week = savedCalories ? JSON.parse(savedCalories) : [];

  const totalBurn = week.reduce((sum, day) => sum + Number(day.total || 0), 0);
  const totalIntake = week.reduce((sum, day) => sum + Number(day.intake || 0), 0);
  const balance = totalIntake - totalBurn;

  if (balance < -3500) return 100;
  if (balance < -2500) return 90;
  if (balance < -1500) return 80;
  if (balance < -500) return 70;
  if (balance <= 500) return 60;
  if (balance <= 1500) return 45;
  return 30;
}

function calculateAxisIndex(performance) {
  const recoveryScore = clamp(performance.recovery);
  const energyScore = clamp(performance.energy * 10);
  const focusScore = clamp(performance.focus * 10);
  const sleepScore = clamp((performance.sleep / 8) * 100);
  const balanceScore = getWeeklyBalanceScore();

  return Math.round(
    recoveryScore * 0.3 +
      energyScore * 0.2 +
      focusScore * 0.2 +
      sleepScore * 0.15 +
      balanceScore * 0.15
  );
}

export default function AxisIndex() {
  const [index, setIndex] = useState(() => calculateAxisIndex(getPerformance()));

  useEffect(() => {
    const update = () => {
      setIndex(calculateAxisIndex(getPerformance()));
    };

    update();

    window.addEventListener("storage", update);

    const interval = setInterval(update, 1000);

    return () => {
      window.removeEventListener("storage", update);
      clearInterval(interval);
    };
  }, []);

  const status =
    index >= 85
      ? "Eixo forte"
      : index >= 70
      ? "Eixo em reconstrução"
      : index >= 55
      ? "Eixo instável"
      : "Eixo fora do centro";

  return (
    <div style={box}>
      <p style={eyebrow}>AXIS INDEX</p>

      <h2 style={title}>{index}</h2>

      <p style={statusStyle}>{status}</p>

      <div style={bar}>
        <div style={{ ...barFill, width: `${index}%` }} />
      </div>

      <p style={subtitle}>
        Score baseado em recovery, energia, foco, sono e balanço energético semanal.
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

const title = {
  margin: 0,
  color: "#F5F5F5",
  fontSize: "56px",
};

const statusStyle = {
  color: "#9CA3AF",
  fontSize: "16px",
  marginTop: "6px",
};

const bar = {
  marginTop: "20px",
  height: "12px",
  background: "#0B0B0B",
  borderRadius: "999px",
  overflow: "hidden",
};

const barFill = {
  height: "100%",
  background: "#F5F5F5",
  borderRadius: "999px",
  transition: "0.3s ease",
};

const subtitle = {
  color: "#6B7280",
  fontSize: "13px",
  marginTop: "18px",
};
