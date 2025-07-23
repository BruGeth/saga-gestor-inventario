import React, { useState } from "react";

export default function TransferManagement({ userRole }) {
  const [selectedTransferType, setSelectedTransferType] = useState("");

  const transferencias = [
    {
      id: "TRF-2025-001",
      tipo: "TIENDA",
      producto: "iPhone 15 Pro Max",
      cantidad: 5,
      destino: "Saga Falabella - Jockey Plaza",
      fecha: "2025-01-22",
      estado: "PENDIENTE",
      responsable: "Angely Corahua",
    },
    // ...otros datos
  ];

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>Gestión de Transferencias</h2>
      {/* Continúa adaptando el resto del contenido a React puro y CSS nativo */}
      {/* ... */}
    </div>
  );
}
