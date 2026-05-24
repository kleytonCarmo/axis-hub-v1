export default function TrainingMode() {
  const performance = JSON.parse(localStorage.getItem("axis-performance") || "{}");

  const recovery = Number(performance.recovery || 80);
  const sleep = Number(performance.sleep || 7.5);
  const strain = Number(performance.strain || 12);
  const energy = Number(performance.energy || 8);

  let mode = "Performance Mode";
  let description =
    "Boa janela para treinar com intensidade controlada e foco em progressão.";

  let color = "#86EFAC";

  if (recovery < 60 || sleep < 6.5) {
    mode = "Recovery Mode";

    description =
      "Priorize mobilidade, caminhada, técnica, sono e baixa carga neural.";

    color = "#FCA5A5";
  } else if (strain > 16 && recovery < 75) {
    mode = "Control Mode";

    description =
      "Carga acumulada alta. Treine com eficiência sem buscar exaustão.";

    color = "#FCD34D";
  } else if (energy <= 5) {
    mode = "Rebuild Mode";

    description =
      "Energia baixa. Faça sessão curta e termine melhor do que entrou.";

    color = "#93C5FD";
  }

  return (
    <div
      className="axis-card"
      style={{
        ...box,
        border: `1px solid ${color}30`,
      }}
    >
      <p style={eyebrow}>TRAINING MODE</p>

      <div style={header}>
        <h2
          style={{
            ...title,
            color,
          }}
        >
          {mode}
        </h2>

        <div
          style={{
            ...dot,
            background: color,
          }}
        />
      </div>

      <p style={text}>{description}</p>
    </div>
  );
}

const box = {
  marginTop: "28px",
  background: "#161616",
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
  gap: "16px",
};

const title = {
  margin: 0,
};

const text = {
  color: "#D1D5DB",
  fontSize: "15px",
  lineHeight: "1.7",
  marginTop: "18px",
};

const dot = {
  width: "14px",
  height: "14px",
  borderRadius: "999px",
};
