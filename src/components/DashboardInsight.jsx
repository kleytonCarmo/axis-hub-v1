export default function DashboardInsight() {
  const performance = JSON.parse(localStorage.getItem("axis-performance") || "{}");
  const week = JSON.parse(localStorage.getItem("axis-calorie-week") || "[]");

  const recovery = Number(performance.recovery || 80);
  const sleep = Number(performance.sleep || 7.5);
  const totalBurn = week.reduce((sum, day) => sum + Number(day.total || 0), 0);
  const totalIntake = week.reduce((sum, day) => sum + Number(day.intake || 0), 0);
  const balance = totalIntake - totalBurn;

  let insight = "Sistema estável. Mantenha consistência e observe a resposta do corpo.";

  if (recovery >= 80 && balance < 0) {
    insight = "Boa janela operacional: recovery alto e déficit controlado. Pode sustentar intensidade com inteligência.";
  } else if (recovery < 60) {
    insight = "Recovery baixo. Priorize sono, hidratação, mobilidade e controle de carga.";
  } else if (balance > 1000) {
    insight = "Balanço semanal positivo. Ajuste ingestão ou aumente gasto para retomar déficit.";
  } else if (sleep < 6.5) {
    insight = "Sono abaixo do ideal. A performance pode cair mesmo com treino bem executado.";
  }

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>AXIS INSIGHT</p>
      <h2 style={title}>Leitura operacional</h2>
      <p style={text}>{insight}</p>
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
  lineHeight: "1.6",
};
