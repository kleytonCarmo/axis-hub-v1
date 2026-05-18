import Sidebar from "./components/Sidebar";
export default function App() {
  return (
  <div
    style={{
      display: "flex",
      backgroundColor: "#0B0B0B",
      color: "#F5F5F5",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <Sidebar />

    <div
      style={{
        flex: 1,
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
          letterSpacing: "2px",
        }}
      >
        AXIS HUB
      </h1>

      <p
        style={{
          color: "#9CA3AF",
          marginBottom: "40px",
        }}
      >
        Human Performance Framework
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#161616",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <h3>AXIS Index</h3>
          <h1>76</h1>
        </div>

        <div
          style={{
            background: "#161616",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <h3>Body Fat</h3>
          <h1>18%</h1>
        </div>

        <div
          style={{
            background: "#161616",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <h3>Lean Mass</h3>
          <h1>71kg</h1>
        </div>

        <div
          style={{
            background: "#161616",
            padding: "24px",
            borderRadius: "20px",
          }}
        >
          <h3>Recovery</h3>
          <h1>82%</h1>
        </div>
      </div>
    </div>
  </div>
  );
}
