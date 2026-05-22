import { useEffect, useState } from "react";

const defaultPerformance = {
  recovery: 80,
  sleep: 7.5,
  strain: 12,
  cardio: 30,
  energy: 8,
  focus: 8,
};

export default function PerformanceMetrics() {
  const [performance, setPerformance] = useState(() => {
    const saved = localStorage.getItem("axis-performance");
    return saved ? JSON.parse(saved) : defaultPerformance;
  });

  useEffect(() => {
    localStorage.setItem("axis-performance", JSON.stringify(performance));
  }, [performance]);

  function update(field, value) {
    setPerformance({
      ...performance,
      [field]: Number(value),
    });
  }

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>PERFORMANCE METRICS</p>

      <h2 style={title}>Estado fisiológico diário.</h2>

      <p style={subtitle}>
        Recovery, sono, strain, cardio e percepção subjetiva de energia/foco.
      </p>

      <div style={grid}>
        <Input label="Recovery %" value={performance.recovery} onChange={(v) => update("recovery", v)} />
        <Input label="Sleep h" value={performance.sleep} onChange={(v) => update("sleep", v)} />
        <Input label="Strain" value={performance.strain} onChange={(v) => update("strain", v)} />
        <Input label="Cardio min" value={performance.cardio} onChange={(v) => update("cardio", v)} />
        <Input label="Energia 0-10" value={performance.energy} onChange={(v) => update("energy", v)} />
        <Input label="Foco 0-10" value={performance.focus} onChange={(v) => update("focus", v)} />
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label style={inputBox}>
      <span style={labelStyle}>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </label>
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

const subtitle = {
  color: "#6B7280",
  fontSize: "13px",
  marginBottom: "28px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "14px",
};

const inputBox = {
  background: "#0B0B0B",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  color: "#6B7280",
  fontSize: "12px",
};

const inputStyle = {
  background: "transparent",
  border: "none",
  color: "#F5F5F5",
  fontSize: "20px",
  outline: "none",
};
