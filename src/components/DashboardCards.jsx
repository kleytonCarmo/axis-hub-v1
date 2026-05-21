import { useEffect, useState } from "react";

const defaultPerformance = {
  recovery: 80,
};

function getLatestCheckpoint() {
  const saved = localStorage.getItem("axis-checkpoints");
  const checkpoints = saved ? JSON.parse(saved) : [];

  if (!Array.isArray(checkpoints) || checkpoints.length === 0) {
    return {
      bodyFat: 15,
      leanMass: 58,
      waist: 81,
    };
  }

  return checkpoints[checkpoints.length - 1];
}

function getPerformance() {
  const saved = localStorage.getItem("axis-performance");
  return saved ? JSON.parse(saved) : defaultPerformance;
}

function getAxisIndex() {
  const performance = getPerformance();

  const recovery = Number(performance.recovery || 0);
  const energy = Number(performance.energy || 8) * 10;
  const focus = Number(performance.focus || 8) * 10;
  const sleep = (Number(performance.sleep || 7.5) / 8) * 100;

  return Math.round(
    recovery * 0.35 +
      energy * 0.25 +
      focus * 0.25 +
      sleep * 0.15
  );
}

export default function DashboardCards() {
  const [data, setData] = useState(() => ({
    checkpoint: getLatestCheckpoint(),
    performance: getPerformance(),
    axisIndex: getAxisIndex(),
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        checkpoint: getLatestCheckpoint(),
        performance: getPerformance(),
        axisIndex: getAxisIndex(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      label: "AXIS Index",
      value: data.axisIndex,
      sub: "Estado atual do eixo",
    },
    {
      label: "Body Fat",
      value: `${data.checkpoint.bodyFat}%`,
      sub: "Gordura estimada",
    },
    {
      label: "Lean Mass",
      value: `${data.checkpoint.leanMass}kg`,
      sub: "Massa magra estimada",
    },
    {
      label: "Recovery",
      value: `${data.performance.recovery}%`,
      sub: "Pronto para performar",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px",
        marginTop: "32px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.label}
          style={{
            background: "#161616",
            border: "1px solid #242424",
            borderRadius: "22px",
            padding: "24px",
          }}
        >
          <p style={{ color: "#9CA3AF", fontSize: "13px", marginBottom: "14px" }}>
            {card.label}
          </p>

          <h2 style={{ fontSize: "34px", margin: 0, color: "#F5F5F5" }}>
            {card.value}
          </h2>

          <p style={{ color: "#6B7280", fontSize: "12px", marginTop: "12px" }}>
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  );
}
