export default function DailyLog() {
  function saveDailyLog() {
    const performance = JSON.parse(localStorage.getItem("axis-performance") || "{}");
    const logs = JSON.parse(localStorage.getItem("axis-daily-logs") || "[]");

    const newLog = {
      date: new Date().toLocaleDateString("pt-BR"),
      recovery: Number(performance.recovery || 80),
      sleep: Number(performance.sleep || 7.5),
      energy: Number(performance.energy || 8),
      focus: Number(performance.focus || 8),
      strain: Number(performance.strain || 12),
    };

    localStorage.setItem("axis-daily-logs", JSON.stringify([...logs, newLog]));

    alert("Estado diário salvo no AXIS.");
  }

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>DAILY LOG</p>
      <h2 style={title}>Salvar estado do dia</h2>
      <p style={text}>
        Registre o estado operacional atual para construir histórico real de recovery e readiness.
      </p>

      <button onClick={saveDailyLog} style={button}>
        Salvar Daily Log
      </button>
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
  fontSize: "15px",
  lineHeight: "1.7",
  marginTop: "18px",
};

const button = {
  marginTop: "22px",
  background: "#F5F5F5",
  color: "#0B0B0B",
  border: "none",
  padding: "14px 18px",
  borderRadius: "14px",
  fontWeight: "bold",
  cursor: "pointer",
};
