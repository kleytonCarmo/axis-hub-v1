import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { week: "W1", bodyFat: 18.0, leanMass: 71.0, waist: 86 },
  { week: "W2", bodyFat: 17.4, leanMass: 71.3, waist: 85 },
  { week: "W3", bodyFat: 16.9, leanMass: 71.7, waist: 84 },
  { week: "W4", bodyFat: 16.2, leanMass: 72.1, waist: 83 },
];

export default function EvolutionChart() {
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
      <p style={{ color: "#9CA3AF", marginBottom: "8px" }}>Evolution</p>

      <h2 style={{ margin: 0, color: "#F5F5F5" }}>
        Seu eixo está voltando.
      </h2>

      <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "28px" }}>
        Evolução semanal de composição corporal e cintura.
      </p>

      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#242424" vertical={false} />
            <XAxis dataKey="week" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                background: "#0B0B0B",
                border: "1px solid #242424",
                borderRadius: "12px",
                color: "#F5F5F5",
              }}
            />
            <Line
              type="monotone"
              dataKey="bodyFat"
              stroke="#F5F5F5"
              strokeWidth={3}
              dot={false}
              name="Gordura %"
            />
            <Line
              type="monotone"
              dataKey="waist"
              stroke="#6B7280"
              strokeWidth={2}
              dot={false}
              name="Cintura"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
