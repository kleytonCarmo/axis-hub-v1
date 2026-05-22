const states = [
  { label: "Clareza", value: 82 },
  { label: "Energia", value: 74 },
  { label: "Disciplina", value: 91 },
  { label: "Presença", value: 76 },
  { label: "Controle", value: 88 },
];

export default function AxisState() {
  return (
    <div
  className="axis-card"
  style={{
        marginTop: "28px",
        background: "#161616",
        border: "1px solid #242424",
        borderRadius: "24px",
        padding: "28px",
      }}
    >
      <p style={{ color: "#9CA3AF", marginBottom: "8px" }}>
        AXIS STATE
      </p>

      <h2 style={{ margin: 0, color: "#F5F5F5" }}>
        O eixo está voltando.
      </h2>

      <p
        style={{
          color: "#6B7280",
          fontSize: "13px",
          marginBottom: "28px",
        }}
      >
        Performance humana sustentável.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {states.map((state) => (
          <div key={state.label}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#F5F5F5" }}>
                {state.label}
              </span>

              <span style={{ color: "#9CA3AF" }}>
                {state.value}%
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#0B0B0B",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${state.value}%`,
                  height: "100%",
                  background: "#F5F5F5",
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
