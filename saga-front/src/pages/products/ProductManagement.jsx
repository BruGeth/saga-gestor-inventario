import "./ProductManagement.css"

function ProductManagement({ userRole }) {
  // Datos simulados de productos
  const productos = [
    {
      id: 1,
      codigo: "7501234567890",
      nombre: "iPhone 15 Pro Max 256GB",
      marca: "Apple",
      tipo: "ELECTRONICO",
      precio: 4999.99,
      stock: 25,
      stockMinimo: 10,
      zona: "Zona A - Electrónicos",
      estado: "ACTIVO",
    },
    {
      id: 2,
      codigo: "7501234567891",
      nombre: "Samsung Galaxy S24 Ultra",
      marca: "Samsung",
      tipo: "ELECTRONICO",
      precio: 4299.99,
      stock: 8,
      stockMinimo: 15,
      zona: "Zona A - Electrónicos",
      estado: "ACTIVO",
    },
    {
      id: 3,
      codigo: "7501234567892",
      nombre: "Zapatillas Nike Air Max",
      marca: "Nike",
      tipo: "DEPORTIVO",
      precio: 299.99,
      stock: 45,
      stockMinimo: 20,
      zona: "Zona D - Deportes",
      estado: "ACTIVO",
    },
  ]

  return (
    <div className="product-management">
      <div className="page-header">
        <div>
          <h2 className="page-title">Gestión de Productos</h2>
          <p className="page-description">Administre el catálogo de productos del almacén</p>
        </div>
        {userRole === "ADMINISTRADOR" && (
          <button className="add-button">
            <svg
              className="button-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Producto
          </button>
        )}
      </div>

      {/* Filtros y búsqueda */}
      <div className="search-card">
        <div className="search-container">
          <div className="search-input-container">
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input placeholder="Buscar por nombre, código o marca..." className="search-input" />
          </div>
          <button className="filter-button">Filtros</button>
        </div>
      </div>

      {/* Tabla de productos */}
      <div className="products-card">
        <div className="card-header">
          <h3 className="card-title">Catálogo de Productos</h3>
          <p className="card-description">{productos.length} productos encontrados</p>
        </div>
        <div className="card-content">
          <div className="products-table">
            <div className="table-header">
              <div className="table-cell">Código</div>
              <div className="table-cell">Producto</div>
              <div className="table-cell">Marca</div>
              <div className="table-cell">Precio</div>
              <div className="table-cell">Stock</div>
              <div className="table-cell">Zona</div>
              <div className="table-cell">Acciones</div>
            </div>
            {productos.map((producto) => (
              <div key={producto.id} className="table-row">
                <div className="table-cell code-cell">{producto.codigo}</div>
                <div className="table-cell">
                  <div className="product-name">{producto.nombre}</div>
                </div>
                <div className="table-cell">{producto.marca}</div>
                <div className="table-cell">S/ {producto.precio.toFixed(2)}</div>
                <div className="table-cell">
                  <div className="stock-container">
                    <span className={producto.stock <= producto.stockMinimo ? "stock-low" : ""}>{producto.stock}</span>
                    {producto.stock <= producto.stockMinimo && (
                      <span className="stock-badge critical">
                        <svg
                          className="badge-icon"
                          fill="none"
                          stroke="currentColor"
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
                        Stock Bajo
                      </span>
                    )}
                  </div>
                </div>
                <div className="table-cell zone-cell">{producto.zona}</div>
                <div className="table-cell">
                  <div className="action-buttons">
                    <button className="action-button">Ver</button>
                    {userRole === "ADMINISTRADOR" && <button className="action-button">Editar</button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductManagement
