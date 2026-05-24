import { useState } from "react";

const protocols = [
  {
    name: "Recovery",
    description:
      "Baixa carga neural. Mobilidade, caminhada, respiração e recuperação sistêmica.",
    duration: "35-50 min",
    focus: "Recuperação fisiológica",
    intensity: "Baixa",
    neural: "Muito baixa",
    metabolic: "Controle inflamatório",
    feeling: "Leveza e reorganização",
    session: [
      "Mobilidade dinâmica",
      "Caminhada outdoor",
      "Respiração e nasal breathing",
      "Core leve",
      "Downregulation",
    ],
  },

  {
    name: "Rebuild",
    description:
      "Sessão curta para restaurar energia e reconstruir aderência.",
    duration: "40-60 min",
    focus: "Energia e consistência",
    intensity: "Moderada",
    neural: "Controlada",
    metabolic: "Ativação metabólica",
    feeling: "Você termina melhor do que começou",
    session: [
      "Warm up atlético",
      "Circuito dinâmico",
      "Carries e deslocamentos",
      "Flow metabólico",
      "Respiração final",
    ],
  },

  {
    name: "Performance",
    description:
      "Janela operacional favorável para intensidade e progressão.",
    duration: "60-80 min",
    focus: "Performance física",
    intensity: "Alta controlada",
    neural: "Alta",
    metabolic: "Performance e potência",
    feeling: "Força, presença e potência",
    session: [
      "Activation",
      "Strength Block",
      "Athletic Block",
      "Finisher",
      "Recovery",
    ],
  },

  {
    name: "Outdoor",
    description:
      "Sessão viva utilizando ambiente externo e movimento real.",
    duration: "45-75 min",
    focus: "Movimento vivo",
    intensity: "Variável",
    neural: "Moderada",
    metabolic: "Capacidade cardiovascular",
    feeling: "Sensação atlética e liberdade",
    session: [
      "Walk + mobility",
      "Sprint leve",
      "Carries",
      "Escadas ou areia",
      "Cooldown outdoor",
    ],
  },

  {
    name: "Flow",
    description:
      "Treino metabólico inteligente com baixa monotonia.",
    duration: "45-65 min",
    focus: "Aderência e fluidez",
    intensity: "Moderada-alta",
    neural: "Moderada",
    metabolic: "Alto gasto energético",
    feeling: "Dinâmico e viciante",
    session: [
      "Warm up",
      "Circuito contínuo",
      "Coordenação",
      "Flow metabólico",
      "Reset final",
    ],
  },
];

export default function Protocol() {
  const [selected, setSelected] = useState(protocols[0]);

  return (
    <div className="fade-page">
      <div className="axis-card" style={box}>
        <p style={eyebrow}>AXIS PROTOCOL</p>

        <h2 style={title}>{selected.name} Mode</h2>

        <p style={description}>{selected.description}</p>

        <div style={statsGrid}>
          <Stat label="Duração" value={selected.duration} />
          <Stat label="Foco" value={selected.focus} />
          <Stat label="Intensidade" value={selected.intensity} />
          <Stat label="Carga Neural" value={selected.neural} />
          <Stat label="Objetivo" value={selected.metabolic} />
          <Stat label="Sensação" value={selected.feeling} />
        </div>

        <div style={sessionBox}>
          <p style={sessionTitle}>Estrutura da sessão</p>

          <div style={sessionGrid}>
            {selected.session.map((item, index) => (
              <div key={item} style={step}>
                <div style={stepNumber}>{index + 1}</div>

                <p style={stepText}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={protocolGrid}>
          {protocols.map((protocol) => {
            const active = protocol.name === selected.name;

            return (
              <button
                key={protocol.name}
                onClick={() => setSelected(protocol)}
                style={{
                  background: active ? "#F5F5F5" : "#161616",
                  color: active ? "#0B0B0B" : "#F5F5F5",
                  border: active
                    ? "1px solid #F5F5F5"
                    : "1px solid #242424",
                  borderRadius: "18px",
                  padding: "18px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "0.2s ease",
                }}
              >
                <strong>{protocol.name}</strong>

                <p
                  style={{
                    marginTop: "10px",
                    color: active ? "#111111" : "#9CA3AF",
                    fontSize: "13px",
                    lineHeight: "1.5",
                  }}
                >
                  {protocol.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid #242424",
        borderRadius: "18px",
        padding: "18px",
      }}
    >
      <p
        style={{
          color: "#6B7280",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        {label}
      </p>

      <strong
        style={{
          color: "#F5F5F5",
          fontSize: "15px",
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

const description = {
  color: "#D1D5DB",
  marginTop: "14px",
  marginBottom: "28px",
  lineHeight: "1.6",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "16px",
  marginBottom: "32px",
};

const sessionBox = {
  background: "#111111",
  border: "1px solid #242424",
  borderRadius: "24px",
  padding: "24px",
  marginBottom: "32px",
};

const sessionTitle = {
  color: "#F5F5F5",
  marginBottom: "22px",
  fontSize: "18px",
};

const sessionGrid = {
  display: "grid",
  gap: "14px",
};

const step = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  background: "#161616",
  border: "1px solid #242424",
  borderRadius: "16px",
  padding: "14px",
};

const stepNumber = {
  width: "34px",
  height: "34px",
  borderRadius: "999px",
  background: "#F5F5F5",
  color: "#0B0B0B",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "14px",
};

const stepText = {
  color: "#F5F5F5",
  margin: 0,
};

const protocolGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};
