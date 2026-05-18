export default function DashboardCards() {
  const cards = [
    { label: "AXIS Index", value: "76", sub: "Estado atual do eixo" },
    { label: "Body Fat", value: "18%", sub: "Composição corporal" },
    { label: "Lean Mass", value: "71kg", sub: "Massa magra estimada" },
    { label: "Recovery", value: "82%", sub: "Pronto para performar" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px",
        marginTop: "32px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.label}
          style={{
            background: "#161616",
            border: "1px solid #242424",
            borderRadius: "22px",
            padding: "24px",
          }}
        >
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            {card.label}
          </p>

          <h2
            style={{
              fontSize: "34px",
              margin: 0,
              color: "#F5F5F5",
            }}
          >
            {card.value}
          </h2>

          <p
            style={{
              color: "#6B7280",
              fontSize: "12px",
              marginTop: "12px",
            }}
          >
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  );
}
