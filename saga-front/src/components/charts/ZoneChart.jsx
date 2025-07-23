"use client"

import { useState } from "react"
import "./ZoneChart.css"

const ZoneChart = ({ data = [] }) => {
  const [selectedZone, setSelectedZone] = useState(null)

  const defaultZones = [
    {
      id: "zona-a",
      nombre: "Zona A - Electrónicos",
      total: 1250,
      disponible: 980,
      ocupacion: 78,
      tipo: "ELECTRONICO",
      color: "#aad63e",
    },
    {
      id: "zona-b",
      nombre: "Zona B - Ropa",
      total: 2100,
      disponible: 1890,
      ocupacion: 90,
      tipo: "TEXTIL",
      color: "#ff6a00",
    },
    {
      id: "zona-c",
      nombre: "Zona C - Hogar",
      total: 850,
      disponible: 720,
      ocupacion: 85,
      tipo: "HOGAR",
      color: "#9333ea",
    },
    {
      id: "zona-d",
      nombre: "Zona D - Deportes",
      total: 650,
      disponible: 580,
      ocupacion: 89,
      tipo: "DEPORTIVO",
      color: "#3b82f6",
    },
  ]

  const zones = data.length > 0 ? data : defaultZones

  const getStatusColor = (ocupacion) => {
    if (ocupacion >= 90) return "#ef4444"
    if (ocupacion >= 75) return "#f59e0b"
    return "#10b981"
  }

  const getStatusText = (ocupacion) => {
    if (ocupacion >= 90) return "Crítico"
    if (ocupacion >= 75) return "Alto"
    return "Normal"
  }

  return (
    <div className="zone-chart">
      <div className="zone-chart-header">
        <h3 className="zone-chart-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C19.0525 4.32465 19.5962 5.13975 19.9652 6.03447C20.3342 6.92919 20.5217 7.88743 20.5217 8.85537C20.5217 9.82331 20.3342 10.7815 19.9652 11.6763C19.5962 12.571 19.0525 13.3861 18.3639 14.0747"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
          Stock por Zonas (Plan Z)
        </h3>
        <p className="zone-chart-subtitle">Ocupación actual del almacén por zonas</p>
      </div>

      <div className="zone-chart-content">
        <div className="zones-grid">
          {zones.map((zona) => (
            <div
              key={zona.id}
              className={`zone-card ${selectedZone === zona.id ? "zone-card-selected" : ""}`}
              onClick={() => setSelectedZone(selectedZone === zona.id ? null : zona.id)}
            >
              <div className="zone-card-header">
                <div className="zone-card-name">{zona.nombre}</div>
                <div
                  className="zone-card-status"
                  style={{
                    backgroundColor: getStatusColor(zona.ocupacion),
                  }}
                >
                  {getStatusText(zona.ocupacion)}
                </div>
              </div>

              <div className="zone-card-progress">
                <div className="zone-card-progress-info">
                  <span>
                    {zona.disponible}/{zona.total}
                  </span>
                  <span>{zona.ocupacion}%</span>
                </div>
                <div className="zone-card-progress-bar">
                  <div
                    className="zone-card-progress-fill"
                    style={{
                      width: `${zona.ocupacion}%`,
                      backgroundColor: zona.color,
                    }}
                  />
                </div>
              </div>

              <div className="zone-card-type">{zona.tipo}</div>

              {selectedZone === zona.id && (
                <div className="zone-card-details">
                  <div className="zone-detail-item">
                    <span>Capacidad Total:</span>
                    <span>{zona.total} unidades</span>
                  </div>
                  <div className="zone-detail-item">
                    <span>Disponible:</span>
                    <span>{zona.disponible} unidades</span>
                  </div>
                  <div className="zone-detail-item">
                    <span>Ocupación:</span>
                    <span>{zona.ocupacion}%</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ZoneChart
