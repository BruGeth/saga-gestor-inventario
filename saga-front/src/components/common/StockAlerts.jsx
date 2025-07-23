import "./StockAlerts.css"

const StockAlerts = ({ alerts = [] }) => {
  const defaultAlerts = [
    {
      id: 1,
      producto: "iPhone 15 Pro",
      stock: 5,
      minimo: 20,
      zona: "Zona A",
      criticidad: "alta",
    },
    {
      id: 2,
      producto: 'Samsung TV 55"',
      stock: 3,
      minimo: 15,
      zona: "Zona A",
      criticidad: "critica",
    },
    {
      id: 3,
      producto: "Zapatillas Nike",
      stock: 8,
      minimo: 25,
      zona: "Zona D",
      criticidad: "media",
    },
  ]

  const stockAlerts = alerts.length > 0 ? alerts : defaultAlerts

  const getCriticalityColor = (criticidad) => {
    switch (criticidad) {
      case "critica":
        return "#ef4444"
      case "alta":
        return "#f59e0b"
      case "media":
        return "#eab308"
      default:
        return "#6b7280"
    }
  }

  const getCriticalityText = (criticidad) => {
    switch (criticidad) {
      case "critica":
        return "Crítico"
      case "alta":
        return "Alto"
      case "media":
        return "Medio"
      default:
        return "Normal"
    }
  }

  return (
    <div className="stock-alerts">
      <div className="stock-alerts-header">
        <h3 className="stock-alerts-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.29 3.86L1.82 18C1.64486 18.3024 1.55625 18.6453 1.56518 18.9928C1.57411 19.3402 1.68043 19.6781 1.87086 19.9715C2.06129 20.2649 2.32949 20.5019 2.64632 20.6584C2.96314 20.8149 3.31707 20.8852 3.67 20.86H20.33C20.6829 20.8852 21.0369 20.8149 21.3537 20.6584C21.6705 20.5019 21.9387 20.2649 22.1291 19.9715C22.3196 19.6781 22.4259 19.3402 22.4348 18.9928C22.4437 18.6453 22.3551 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="9"
              x2="12"
              y2="13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
          </svg>
          Productos con Stock Bajo
        </h3>
        <p className="stock-alerts-subtitle">Productos que requieren reposición urgente</p>
      </div>

      <div className="stock-alerts-content">
        {stockAlerts.map((alert) => (
          <div key={alert.id} className="stock-alert-item">
            <div className="stock-alert-info">
              <div className="stock-alert-product">{alert.producto}</div>
              <div className="stock-alert-zone">{alert.zona}</div>
            </div>
            <div className="stock-alert-stock">
              <div className="stock-alert-numbers">
                <span className="stock-current">{alert.stock}</span>
                <span className="stock-separator">/</span>
                <span className="stock-minimum">{alert.minimo}</span>
              </div>
              <div
                className="stock-alert-badge"
                style={{
                  backgroundColor: getCriticalityColor(alert.criticidad),
                }}
              >
                {getCriticalityText(alert.criticidad)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stock-alerts-footer">
        <button className="stock-alerts-view-all">Ver todos los productos con stock bajo</button>
      </div>
    </div>
  )
}

export default StockAlerts
