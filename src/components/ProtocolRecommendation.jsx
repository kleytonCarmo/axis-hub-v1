export default function ProtocolRecommendation() {
  const performance = JSON.parse(
    localStorage.getItem("axis-performance") || "{}"
  );

  const recovery = Number(performance.recovery || 80);
  const sleep = Number(performance.sleep || 7.5);
  const strain = Number(performance.strain || 12);
  const energy = Number(performance.energy || 8);

  let protocol = "Performance";
  let reason =
    "Recovery alto e boa energia. Janela operacional favorável para intensidade controlada.";

  let color = "#86EFAC";

  if (recovery < 60 || sleep < 6.5) {
    protocol = "Recovery";
    reason =
      "Recuperação baixa detectada. Priorize redução de carga neural e reorganização fisiológica.";

    color = "#FCA5A5";
  } else if (strain > 16 && recovery < 75) {
    protocol = "Control";
    reason =
      "Carga acumulada elevada. Controle intensidade para preservar aderência e performance.";

    color = "#FCD34D";
  } else if (energy <= 5) {
    protocol = "Rebuild";
    reason =
      "Energia reduzida. Sessão deve restaurar disposição e manter consistência.";

    color = "#93C5FD";
  }

  return (
    <div className="axis-card" style={box}>
      <div style={top}>
        <div>
          <p style={eyebrow}>PROTOCOL AI</p>

          <h2 style={title}>
            {protocol} Mode Recommended
          </h2>
        </div>

        <div
          style={{
            ...badge,
            background: color,
          }}
        />
      </div>

      <p style={text}>{reason}</p>

      <div style={stats}>
        <Stat label="Recovery" value={`${recovery}%`} />
        <Stat label="Sleep" value={`${sleep}h`} />
        <Stat label="Strain" value={strain} />
        <Stat label="Energy" value={`${energy}/10`} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={statBox}>
      <p style={statLabel}>{label}</p>

      <strong style={statValue}>{value}</strong>
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

const top = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
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
  lineHeight: "1.7",
  marginTop: "18px",
};

const badge = {
  width: "16px",
  height: "16px",
  borderRadius: "999px",
};

const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "16px",
  marginTop: "28px",
};

const statBox = {
  background: "#111111",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "18px",
};

const statLabel = {
  color: "#6B7280",
  fontSize: "12px",
  marginBottom: "8px",
};

const statValue = {
  color: "#F5F5F5",
};
