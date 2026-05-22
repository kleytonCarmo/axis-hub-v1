export default function TrainingMode() {
  const performance = JSON.parse(localStorage.getItem("axis-performance") || "{}");

  const recovery = Number(performance.recovery || 80);
  const sleep = Number(performance.sleep || 7.5);
  const strain = Number(performance.strain || 12);
  const energy = Number(performance.energy || 8);

  let mode = "Performance Mode";
  let description = "Boa janela para treinar com intensidade controlada e foco em progressão.";

  if (recovery < 60 || sleep < 6.5) {
    mode = "Recovery Mode";
    description = "Priorize mobilidade, caminhada, técnica, sono e baixa carga neural.";
  } else if (strain > 16 && recovery < 75) {
    mode = "Control Mode";
    description = "Carga acumulada alta. Treine com eficiência, sem buscar exaustão.";
  } else if (energy <= 5) {
    mode = "Rebuild Mode";
    description = "Energia baixa. Faça sessão curta, dinâmica e termine melhor do que entrou.";
  }

  return (
    <div className="axis-card" style={box}>
      <p style={eyebrow}>TRAINING MODE</p>
      <h2 style={title}>{mode}</h2>
      <p style={text}>{description}</p>
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
