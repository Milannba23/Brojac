import React, { useState } from "react";

function UseStateBrojac() {
  const [broj, setBroj] = useState(0);

  return (
    <div
      style={{
        padding: "25px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
        margin: "20px auto",
      }}
    >
      <h3>Prost Brojač</h3>

      <p
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          margin: "15px 0",
        }}
      >
        {broj}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <button
          onClick={() => setBroj(broj + 1)}
          style={{
            width: "130px",
            height: "55px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Uvećaj (+1)
        </button>

        <button
          onClick={() => setBroj(broj - 1)}
          style={{
            width: "130px",
            height: "55px",
            fontSize: "16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Smanji (-1)
        </button>
      </div>
    </div>
  );
}

export default UseStateBrojac;
