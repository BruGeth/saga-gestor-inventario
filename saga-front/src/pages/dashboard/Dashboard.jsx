import "./Dashboard.css"

function Dashboard({ userRole }) {
  // Datos simulados
  const stockData = [
    { zona: "Zona A - Electrónicos", total: 1250, disponible: 980, ocupacion: 78 },
    { zona: "Zona B - Ropa", total: 2100, disponible: 1890, ocupacion: 90 },
    { zona: "Zona C - Hogar", total: 850, disponible: 720, ocupacion: 85 },
    { zona: "Zona D - Deportes", total: 650, disponible: 580, ocupacion: 89 },
  ]

  const productosStockBajo = [
    { nombre: "iPhone 15 Pro", stock: 5, minimo: 20, zona: "Zona A" },
    { nombre: 'Samsung TV 55"', stock: 3, minimo: 15, zona: "Zona A" },
    { nombre: "Zapatillas Nike", stock: 8, minimo: 25, zona: "Zona D" },
  ]

  const productosDaniados = [
    { nombre: "Laptop HP", clase: "CLASE_100", cantidad: 2, fecha: "2025-01-20" },
    { nombre: "Microondas LG", clase: "CLASE_0", cantidad: 1, fecha: "2025-01-19" },
  ]

  return (
    <div className="dashboard">
      {/* Métricas principales */}
      <div className="dashboard-metrics">
        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Total Productos</h3>
            <svg
              className="metric-icon"
              fill="none"
              stroke="#6b7280"
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
          <div className="metric-content">
            <div className="metric-value">4,850</div>
            <p className="metric-trend positive">
              <svg
                className="trend-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
              +12% desde ayer
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Stock Bajo</h3>
            <svg
              className="metric-icon"
              fill="none"
              stroke="#eab308"
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
          </div>
          <div className="metric-content">
            <div className="metric-value yellow">23</div>
            <p className="metric-description">Productos bajo stock mínimo</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Productos Dañados</h3>
            <svg
              className="metric-icon"
              fill="none"
              stroke="#dc2626"
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
          </div>
          <div className="metric-content">
            <div className="metric-value red">8</div>
            <p className="metric-trend negative">
              <svg
                className="trend-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
              +3 desde ayer
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Transferencias Hoy</h3>
            <svg
              className="metric-icon"
              fill="none"
              stroke="#6b7280"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="metric-content">
            <div className="metric-value">156</div>
            <p className="metric-trend positive">
              <svg
                className="trend-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
              +8% vs promedio
            </p>
          </div>
        </div>
      </div>

      <div className="dashboard-details">
        {/* Stock por Zonas */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <svg
                className="card-title-icon"
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
              Stock por Zonas (Plan Z)
            </h2>
            <p className="card-description">Ocupación actual del almacén por zonas</p>
          </div>
          <div className="card-content">
            {stockData.map((zona, index) => (
              <div key={index} className="zone-item">
                <div className="zone-header">
                  <span className="zone-name">{zona.zona}</span>
                  <span className="zone-stats">
                    {zona.disponible}/{zona.total}
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${zona.ocupacion}%` }}></div>
                </div>
                <div className="zone-footer">
                  <span>Ocupación: {zona.ocupacion}%</span>
                  <span className={`zone-badge ${zona.ocupacion > 85 ? "critical" : "normal"}`}>
                    {zona.ocupacion > 85 ? "Crítico" : "Normal"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Productos con Stock Bajo */}
        <div className="dashboard-card">
          <div className="card-header">
            <h2 className="card-title">
              <svg
                className="card-title-icon"
                fill="none"
                stroke="#eab308"
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
              Productos con Stock Bajo
            </h2>
            <p className="card-description">Productos que requieren reposición urgente</p>
          </div>
          <div className="card-content">
            {productosStockBajo.map((producto, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <p className="product-name">{producto.nombre}</p>
                  <p className="product-zone">{producto.zona}</p>
                </div>
                <div className="product-stats">
                  <p className="product-stock">
                    <span className="stock-current">{producto.stock}</span>
                    <span className="stock-minimum"> / {producto.minimo}</span>
                  </p>
                  <span className="product-badge critical">Crítico</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Productos Dañados Recientes */}
      {(userRole === "ADMINISTRADOR" || userRole === "SUPERVISOR") && (
        <div className="dashboard-card full-width">
          <div className="card-header">
            <h2 className="card-title">
              <svg
                className="card-title-icon"
                fill="none"
                stroke="#dc2626"
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
              Productos Dañados Recientes
            </h2>
            <p className="card-description">Últimos productos clasificados como dañados</p>
          </div>
          <div className="card-content">
            {productosDaniados.map((producto, index) => (
              <div key={index} className="damaged-product-item">
                <div className="product-info">
                  <p className="product-name">{producto.nombre}</p>
                  <p className="product-date">Fecha: {new Date(producto.fecha).toLocaleDateString("es-PE")}</p>
                </div>
                <div className="product-stats">
                  <span className={`product-badge ${producto.clase === "CLASE_0" ? "critical" : "secondary"}`}>
                    {producto.clase}
                  </span>
                  <p className="product-quantity">Cantidad: {producto.cantidad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
