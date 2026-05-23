import { useState } from "react";

const protocols = [
  {
    name: "Recovery",
    description:
      "Baixa carga neural. Mobilidade, caminhada, respiração, técnica e recuperação sistêmica.",
  },
  {
    name: "Rebuild",
    description:
      "Sessão curta e dinâmica para restaurar energia e aderência sem desgaste excessivo.",
  },
  {
    name: "Performance",
    description:
      "Janela operacional favorável. Intensidade controlada e foco em progressão.",
  },
  {
    name: "Outdoor",
    description:
      "Sessão viva e atlética utilizando ambiente externo, deslocamentos e movimento livre.",
  },
  {
    name: "Flow",
    description:
      "Treino metabólico inteligente com sensação dinâmica e baixa monotonia.",
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

        <div style={grid}>
          {protocols.map((protocol) => {
            const active = protocol.name === selected.name;

            return (
              <button
                key={protocol.name}
                onClick={() => setSelected(protocol)}
                style={{
                  background: active ? "#F5F5F5" : "#161616",
                  color: active ? "#0B0B0B" : "#F5F5F5",
                  border: "1px solid #242424",
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

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
};
