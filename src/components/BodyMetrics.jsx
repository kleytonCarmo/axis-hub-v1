const metrics = {
  weight: 68.5,
  neck: 38,
  waist: 81.5,
  hip: 93.5,
};

const bodyFat = 15.0;
const fatKg = ((metrics.weight * bodyFat) / 100).toFixed(1);
const leanMass = (metrics.weight - fatKg).toFixed(1);

export default function BodyMetrics() {
  return (
    <div
      style={{
        marginTop: "28px",
        background: "#161616",
        border: "1px solid #242424",
        borderRadius: "24px",
        padding: "28px",
      }}
    >
      <p style={{ color: "#9CA3AF", marginBottom: "8px" }}>BODY METRICS</p>

      <h2 style={{ margin: 0, color: "#F5F5F5" }}>
        Composição corporal estimada.
      </h2>

      <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "28px" }}>
        Peso, circunferências e cálculo operacional de evolução.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "14px",
        }}
      >
        <Metric label="Peso" value={`${metrics.weight} kg`} />
        <Metric label="Pescoço" value={`${metrics.neck} cm`} />
        <Metric label="Cintura" value={`${metrics.waist} cm`} />
        <Metric label="Quadril" value={`${metrics.hip} cm`} />
        <Metric label="Gordura" value={`${bodyFat}%`} />
        <Metric label="Gordura kg" value={`${fatKg} kg`} />
        <Metric label="Massa magra" value={`${leanMass} kg`} />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div
      style={{
        background: "#0B0B0B",
        border: "1px solid #242424",
        borderRadius: "18px",
        padding: "18px",
      }}
    >
      <p style={{ color: "#6B7280", fontSize: "12px", marginBottom: "10px" }}>
        {label}
      </p>

      <strong style={{ color: "#F5F5F5", fontSize: "22px" }}>{value}</strong>
    </div>
  );
}
