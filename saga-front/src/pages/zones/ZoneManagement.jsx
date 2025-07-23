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
            <svg
              className="button-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Configurar Zonas
          </button>
        )}
      </div>

      {/* Resumen general */}
      <div className="summary-metrics">
        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Total Zonas</p>
              <p className="summary-value">4</p>
            </div>
            <svg
              className="summary-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Total Productos</p>
              <p className="summary-value">1,525</p>
            </div>
            <svg
              className="summary-icon green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Valor Total</p>
              <p className="summary-value">S/ 4.3M</p>
            </div>
            <svg
              className="summary-icon green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-content">
            <div className="summary-info">
              <p className="summary-label">Ocupación Promedio</p>
              <p className="summary-value">84%</p>
            </div>
            <svg
              className="summary-icon green"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
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
                    <svg
                      className="zone-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
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
                <div className="zone-metrics">
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
                      <svg
                        className="alert-icon"
                        fill="none"
                        stroke="var(--falabella-orange)"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                      <span className="alerts-title">Alertas</span>
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
                <div className="update-info">
                  <p className="update-text">Última actualización: {zona.ultimaActualizacion}</p>
                </div>

                {/* Acciones */}
                <div className="zone-actions">
                  <button className="zone-action-btn">Ver Productos</button>
                  {userRole === "ADMINISTRADOR" && <button className="zone-action-btn">Configurar</button>}
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
            <div className="plan-z-item">
              <h4 className="plan-z-title green">Zona A - Electrónicos</h4>
              <p className="plan-z-description">Productos tecnológicos, celulares, computadoras, electrodomésticos</p>
            </div>
            <div className="plan-z-item">
              <h4 className="plan-z-title orange">Zona B - Textil</h4>
              <p className="plan-z-description">Ropa, calzado, accesorios de moda para todas las edades</p>
            </div>
            <div className="plan-z-item">
              <h4 className="plan-z-title purple">Zona C - Hogar</h4>
              <p className="plan-z-description">Muebles, decoración, artículos para el hogar y cocina</p>
            </div>
            <div className="plan-z-item">
              <h4 className="plan-z-title blue">Zona D - Deportes</h4>
              <p className="plan-z-description">Equipamiento deportivo, ropa deportiva, accesorios fitness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZoneManagement
