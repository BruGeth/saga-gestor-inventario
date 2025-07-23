import "./Dashboard.css"
import { Package, AlertTriangle, TrendingUp, MapPin, ArrowUp } from "lucide-react"

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
            <Package className="package-icon" size={20} color="#cccccc" />
          </div>
          <div className="metric-content">
            <div className="metric-value">4,850</div>
            <p className="metric-trend positive">
            <ArrowUp className="arrow-up-icon" size={14} color="#aad63e" style={{ marginRight: 4 }} />
              +12% desde ayer
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Stock Bajo</h3>
            <AlertTriangle className="alert-icon" size={20} color="#eab308" />
          </div>
          <div className="metric-content">
            <div className="metric-value yellow">23</div>
            <p className="metric-description">Productos bajo stock mínimo</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Productos Dañados</h3>
            <AlertTriangle className="alert-icon" size={20} color="#dc2626" />
          </div>
          <div className="metric-content">
            <div className="metric-value red">8</div>
            <p className="metric-trend negative">
              <i className="arrow-up-icon"></i>
              +3 desde ayer
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Transferencias Hoy</h3>
            <TrendingUp className="trending-icon" size={20} color="#cccccc" />
          </div>
          <div className="metric-content">
            <div className="metric-value">156</div>
            <p className="metric-trend positive">
              <i className="arrow-up-icon"></i>
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
              <MapPin className="map-pin-icon" size={20} color="#aad63e" style={{ marginRight: 8 }} />
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
              <AlertTriangle className="alert-icon" size={20} color="#eab308" style={{ marginRight: 8 }} />
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
              <AlertTriangle className="alert-icon" size={20} color="#dc2626" style={{ marginRight: 8 }} />
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
