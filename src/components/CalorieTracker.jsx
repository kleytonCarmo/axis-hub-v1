import { useEffect, useState } from "react";

const initialWeek = [
  { day: "Seg", exercise: 0, total: 0, intake: 0 },
  { day: "Ter", exercise: 0, total: 0, intake: 0 },
  { day: "Qua", exercise: 0, total: 0, intake: 0 },
  { day: "Qui", exercise: 0, total: 0, intake: 0 },
  { day: "Sex", exercise: 0, total: 0, intake: 0 },
  { day: "Sáb", exercise: 0, total: 0, intake: 0 },
  { day: "Dom", exercise: 0, total: 0, intake: 0 },
];

export default function CalorieTracker() {
  const [week, setWeek] = useState(() => {
    const saved = localStorage.getItem("axis-calorie-week");
    return saved ? JSON.parse(saved) : initialWeek;
  });

  useEffect(() => {
    localStorage.setItem("axis-calorie-week", JSON.stringify(week));
  }, [week]);

  function updateDay(index, field, value) {
    const updated = [...week];
    updated[index] = {
      ...updated[index],
      [field]: Number(value),
    };
    setWeek(updated);
  }

  const totalExercise = week.reduce((sum, day) => sum + day.exercise, 0);
  const totalDailyBurn = week.reduce((sum, day) => sum + day.total, 0);
  const totalIntake = week.reduce((sum, day) => sum + day.intake, 0);
  const weeklyBalance = totalIntake - totalDailyBurn;

  return (
    <div style={box}>
      <p style={eyebrow}>CALORIE TRACKER</p>

      <h2 style={title}>Balanço energético semanal.</h2>

      <p style={subtitle}>
        Registre gasto por sessão, gasto total diário e calorias ingeridas.
      </p>

      <div style={summaryGrid}>
        <Summary label="Gasto exercício" value={`${totalExercise} kcal`} />
        <Summary label="Gasto total semana" value={`${totalDailyBurn} kcal`} />
        <Summary label="Ingestão semana" value={`${totalIntake} kcal`} />
        <Summary
          label="Balanço semanal"
          value={`${weeklyBalance} kcal`}
          highlight={weeklyBalance < 0 ? "deficit" : "surplus"}
        />
      </div>

      <div style={table}>
        {week.map((item, index) => (
          <div key={item.day} style={row}>
            <strong style={dayLabel}>{item.day}</strong>

            <Input
              label="Exercício"
              value={item.exercise}
              onChange={(v) => updateDay(index, "exercise", v)}
            />

            <Input
              label="Gasto total"
              value={item.total}
              onChange={(v) => updateDay(index, "total", v)}
            />

            <Input
              label="Ingerido"
              value={item.intake}
              onChange={(v) => updateDay(index, "intake", v)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label style={inputWrap}>
      <span style={smallLabel}>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={input}
      />
    </label>
  );
}

function Summary({ label, value, highlight }) {
  return (
    <div style={summaryCard}>
      <p style={smallLabel}>{label}</p>
      <strong
        style={{
          color:
            highlight === "deficit"
              ? "#86EFAC"
              : highlight === "surplus"
              ? "#FCA5A5"
              : "#F5F5F5",
          fontSize: "22px",
        }}
      >
        {value}
      </strong>
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

const subtitle = {
  color: "#6B7280",
  fontSize: "13px",
  marginBottom: "28px",
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "14px",
  marginBottom: "24px",
};

const summaryCard = {
  background: "#0B0B0B",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "18px",
};

const table = {
  display: "grid",
  gap: "12px",
};

const row = {
  display: "grid",
  gridTemplateColumns: "70px repeat(3, 1fr)",
  gap: "12px",
  alignItems: "center",
  background: "#0B0B0B",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "14px",
};

const dayLabel = {
  color: "#F5F5F5",
};

const inputWrap = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const smallLabel = {
  color: "#6B7280",
  fontSize: "12px",
};

const input = {
  background: "#161616",
  border: "1px solid #242424",
  borderRadius: "12px",
  padding: "10px",
  color: "#F5F5F5",
  outline: "none",
};
