import "./DamagedProducts.css"

const DamagedProducts = ({ products = [] }) => {
  const defaultProducts = [
    {
      id: 1,
      nombre: "Laptop HP",
      clase: "CLASE_100",
      cantidad: 2,
      fecha: "2025-01-20",
      costo: 4399.98,
    },
    {
      id: 2,
      nombre: "Microondas LG",
      clase: "CLASE_0",
      cantidad: 1,
      fecha: "2025-01-19",
      costo: 299.99,
    },
  ]

  const damagedProducts = products.length > 0 ? products : defaultProducts

  const getClaseColor = (clase) => {
    return clase === "CLASE_0" ? "#ef4444" : "#f59e0b"
  }

  const getClaseText = (clase) => {
    return clase === "CLASE_0" ? "Pérdida Total" : "Reparable"
  }

  return (
    <div className="damaged-products">
      <div className="damaged-products-header">
        <h3 className="damaged-products-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
          </svg>
          Productos Dañados Recientes
        </h3>
        <p className="damaged-products-subtitle">Últimos productos clasificados como dañados</p>
      </div>

      <div className="damaged-products-content">
        {damagedProducts.map((product) => (
          <div key={product.id} className="damaged-product-item">
            <div className="damaged-product-info">
              <div className="damaged-product-name">{product.nombre}</div>
              <div className="damaged-product-date">{new Date(product.fecha).toLocaleDateString("es-PE")}</div>
            </div>
            <div className="damaged-product-details">
              <div
                className="damaged-product-clase"
                style={{
                  backgroundColor: getClaseColor(product.clase),
                }}
              >
                {product.clase}
              </div>
              <div className="damaged-product-quantity">Cantidad: {product.cantidad}</div>
              <div className="damaged-product-cost">S/ {product.costo.toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="damaged-products-info">
        <div className="damage-class-info">
          <div className="damage-class-item">
            <div className="damage-class-indicator" style={{ backgroundColor: "#ef4444" }}></div>
            <span>Clase 0 - Pérdida Total</span>
          </div>
          <div className="damage-class-item">
            <div className="damage-class-indicator" style={{ backgroundColor: "#f59e0b" }}></div>
            <span>Clase 100 - Reparable</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DamagedProducts
