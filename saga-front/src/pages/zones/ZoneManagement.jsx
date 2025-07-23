import { MapPin, Package, TrendingUp, AlertTriangle, Settings, BarChart3 } from "lucide-react"
import "./ZoneManagement.css"

function ZoneManagement({ userRole }) {
  const zonas = [
    {
      id: "zona-a",
      nombre: "Zona A - Electrónicos",
      tipo: "ELECTRONICO",
      capacidadMaxima: 1500,
      ocupacionActual: 1180,
      productos: 245,
      valorInventario: 2850000,
      ultimaActualizacion: "2025-01-22 14:30",
      estado: "ACTIVA",
      alertas: ["Stock crítico en 3 productos"],
    },
    {
      id: "zona-b",
      nombre: "Zona B - Ropa",
      tipo: "TEXTIL",
      capacidadMaxima: 2000,
      ocupacionActual: 1850,
      productos: 890,
      valorInventario: 450000,
      ultimaActualizacion: "2025-01-22 15:15",
      estado: "ACTIVA",
      alertas: ["Capacidad al 92%", "Requiere reorganización"],
    },
    {
      id: "zona-c",
      nombre: "Zona C - Hogar",
      tipo: "HOGAR",
      capacidadMaxima: 1200,
      ocupacionActual: 980,
      productos: 156,
      valorInventario: 680000,
      ultimaActualizacion: "2025-01-22 13:45",
      estado: "ACTIVA",
      alertas: [],
    },
    {
      id: "zona-d",
      nombre: "Zona D - Deportes",
      tipo: "DEPORTIVO",
      capacidadMaxima: 800,
      ocupacionActual: 720,
      productos: 234,
      valorInventario: 320000,
      ultimaActualizacion: "2025-01-22 16:00",
      estado: "ACTIVA",
      alertas: ["Nuevo lote pendiente"],
    },
  ]

  const getOccupancyPercentage = (actual, maxima) => {
    return Math.round((actual / maxima) * 100)
  }

  const getOccupancyStatus = (percentage) => {
    if (percentage >= 90) return { color: "critical", label: "Crítico" }
    if (percentage >= 75) return { color: "warning", label: "Alto" }
    return { color: "normal", label: "Normal" }
  }

  return (
    <div className="zone-management">
      <div className="page-header">
        <div>
          <h2 className="page-title">Gestión de Zonas</h2>
          <p className="page-description">Control y organización según Plan Z</p>
        </div>
        {userRole === "ADMINISTRADOR" && (
          <button className="config-button">
            <Settings size={16} />
            Configurar Zonas
          </button>
        )}
      </div>

      {/* Resumen general */}
      <div className="summary-grid">
        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Total Zonas</p>
              <p className="summary-value">4</p>
            </div>
            <MapPin className="summary-icon" size={32} />
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Total Productos</p>
              <p className="summary-value">1,525</p>
            </div>
            <Package className="summary-icon green" size={32} />
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Valor Total</p>
              <p className="summary-value">S/ 4.3M</p>
            </div>
            <TrendingUp className="summary-icon green" size={32} />
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Ocupación Promedio</p>
              <p className="summary-value">84%</p>
            </div>
            <BarChart3 className="summary-icon green" size={32} />
          </div>
        </div>
      </div>

      {/* Detalle de zonas */}
      <div className="zones-grid">
        {zonas.map((zona) => {
          const occupancyPercentage = getOccupancyPercentage(zona.ocupacionActual, zona.capacidadMaxima)
          const status = getOccupancyStatus(occupancyPercentage)

          return (
            <div key={zona.id} className="zone-card">
              <div className="zone-header">
                <div className="zone-title-section">
                  <h3 className="zone-title">
                    <MapPin size={20} />
                    {zona.nombre}
                  </h3>
                  <p className="zone-subtitle">
                    Tipo: {zona.tipo} • Estado: {zona.estado}
                  </p>
                </div>
                <span className={`zone-status-badge ${status.color}`}>{status.label}</span>
              </div>

              <div className="zone-content">
                {/* Ocupación */}
                <div className="occupancy-section">
                  <div className="occupancy-header">
                    <span>Ocupación</span>
                    <span>
                      {zona.ocupacionActual} / {zona.capacidadMaxima} unidades
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${occupancyPercentage}%` }}></div>
                  </div>
                  <div className="occupancy-footer">
                    <span>{occupancyPercentage}% ocupado</span>
                    <span>{zona.capacidadMaxima - zona.ocupacionActual} disponibles</span>
                  </div>
                </div>

                {/* Métricas */}
                <div className="metrics-section">
                  <div className="metric-item">
                    <p className="metric-label">Productos</p>
                    <p className="metric-value">{zona.productos}</p>
                  </div>
                  <div className="metric-item">
                    <p className="metric-label">Valor Inventario</p>
                    <p className="metric-value">S/ {(zona.valorInventario / 1000).toFixed(0)}K</p>
                  </div>
                </div>

                {/* Alertas */}
                {zona.alertas.length > 0 && (
                  <div className="alerts-section">
                    <div className="alerts-header">
                      <AlertTriangle className="alert-icon" size={16} />
                      <span>Alertas</span>
                    </div>
                    <div className="alerts-list">
                      {zona.alertas.map((alerta, index) => (
                        <p key={index} className="alert-item">
                          {alerta}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Última actualización */}
                <div className="update-section">
                  <p className="update-text">Última actualización: {zona.ultimaActualizacion}</p>
                </div>

                {/* Acciones */}
                <div className="actions-section">
                  <button className="action-button">Ver Productos</button>
                  {userRole === "ADMINISTRADOR" && <button className="action-button">Configurar</button>}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Plan Z - Información */}
      <div className="plan-z-card">
        <div className="card-header">
          <h3 className="card-title">Plan Z - Zonificación</h3>
          <p className="card-description">
            Sistema de organización por tipo de producto implementado en Saga Falabella
          </p>
        </div>
        <div className="card-content">
          <div className="plan-z-grid">
            <div className="plan-z-item green">
              <h4 className="plan-z-title">Zona A - Electrónicos</h4>
              <p className="plan-z-description">Productos tecnológicos, celulares, computadoras, electrodomésticos</p>
            </div>
            <div className="plan-z-item orange">
              <h4 className="plan-z-title">Zona B - Textil</h4>
              <p className="plan-z-description">Ropa, calzado, accesorios de moda para todas las edades</p>
            </div>
            <div className="plan-z-item purple">
              <h4 className="plan-z-title">Zona C - Hogar</h4>
              <p className="plan-z-description">Muebles, decoración, artículos para el hogar y cocina</p>
            </div>
            <div className="plan-z-item blue">
              <h4 className="plan-z-title">Zona D - Deportes</h4>
              <p className="plan-z-description">Equipamiento deportivo, ropa deportiva, accesorios fitness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZoneManagement
