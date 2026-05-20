import { useState } from "react";

function cmToIn(cm) {
  return Number(cm) / 2.54;
}

function calculateBodyFat({ sex, height, neck, waist, hip }) {
  const h = cmToIn(height);
  const n = cmToIn(neck);
  const w = cmToIn(waist);
  const hp = cmToIn(hip);

  if (sex === "male") {
    return 86.01 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
  }

  return 163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
}

export default function BodyMetrics({ checkpoints, setCheckpoints }) {
  const [profile, setProfile] = useState({
    sex: "male",
    height: 170,
    weight: 68.5,
    neck: 38,
    waist: 81.5,
    hip: 93.5,
  });



  const bodyFat = Math.max(3, calculateBodyFat(profile)).toFixed(1);
  const fatKg = ((profile.weight * bodyFat) / 100).toFixed(1);
  const leanMass = (profile.weight - fatKg).toFixed(1);

  function updateField(field, value) {
    setProfile({
      ...profile,
      [field]: value,
    });
  }

  function saveCheckpoint() {
    const newCheckpoint = {
  date: `Semana ${checkpoints.length + 1}`,
  weight: profile.weight,
  waist: profile.waist,
  bodyFat: Number(bodyFat),
  fatKg: Number(fatKg),
  leanMass: Number(leanMass),
};

    setCheckpoints([...checkpoints, newCheckpoint]);
  }

  return (
    <div style={box}>
      <p style={eyebrow}>BODY METRICS</p>

      <h2 style={title}>Composição corporal operacional.</h2>

      <p style={subtitle}>
        Insira as medidas semanais para recalcular gordura, massa magra e evolução.
      </p>

      <div style={inputGrid}>
        <Input label="Altura" value={profile.height} onChange={(v) => updateField("height", v)} />
        <Input label="Peso" value={profile.weight} onChange={(v) => updateField("weight", v)} />
        <Input label="Pescoço" value={profile.neck} onChange={(v) => updateField("neck", v)} />
        <Input label="Cintura" value={profile.waist} onChange={(v) => updateField("waist", v)} />
        <Input label="Quadril" value={profile.hip} onChange={(v) => updateField("hip", v)} />
      </div>

      <div style={grid}>
        <Metric label="Gordura estimada" value={`${bodyFat}%`} />
        <Metric label="Gordura kg" value={`${fatKg} kg`} />
        <Metric label="Massa magra" value={`${leanMass} kg`} />
      </div>

      <button onClick={saveCheckpoint} style={button}>
        Salvar checkpoint
      </button>

      {checkpoints.length > 0 && (
        <div style={{ marginTop: "24px" }}>
          <p style={eyebrow}>CHECKPOINTS SALVOS</p>

          {checkpoints.map((item, index) => (
            <div key={index} style={checkpoint}>
              <strong>{item.date}</strong>
              <span>Peso: {item.weight} kg</span>
              <span>Cintura: {item.waist} cm</span>
              <span>Gordura: {item.bodyFat}%</span>
              <span>Massa magra: {item.leanMass} kg</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label style={inputBox}>
      <span style={labelStyle}>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={inputStyle}
      />
    </label>
  );
}

function Metric({ label, value }) {
  return (
    <div style={card}>
      <p style={labelStyle}>{label}</p>
      <strong style={valueStyle}>{value}</strong>
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

const inputGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "14px",
  marginBottom: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "14px",
};

const inputBox = {
  background: "#0B0B0B",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  background: "transparent",
  border: "none",
  color: "#F5F5F5",
  fontSize: "20px",
  outline: "none",
};

const card = {
  background: "#0B0B0B",
  border: "1px solid #242424",
  borderRadius: "18px",
  padding: "18px",
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

const checkpoint = {
  marginTop: "12px",
  background: "#0B0B0B",
  border: "1px solid #242424",
  borderRadius: "16px",
  padding: "16px",
  display: "grid",
  gap: "6px",
  color: "#D1D5DB",
};

const labelStyle = {
  color: "#6B7280",
  fontSize: "12px",
};

const valueStyle = {
  color: "#F5F5F5",
  fontSize: "22px",
};
