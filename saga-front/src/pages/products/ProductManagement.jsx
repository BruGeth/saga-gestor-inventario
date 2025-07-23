"use client"

import { useState } from "react"
import { Search, Filter, Plus, Edit, Eye, Package, AlertTriangle } from "lucide-react"
import "./ProductManagement.css"

function ProductManagement({ userRole }) {
  const [searchTerm, setSearchTerm] = useState("")

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
    {
      id: 4,
      codigo: "7501234567893",
      nombre: "Laptop HP Pavilion 15",
      marca: "HP",
      tipo: "ELECTRONICO",
      precio: 2199.99,
      stock: 3,
      stockMinimo: 8,
      zona: "Zona A - Electrónicos",
      estado: "ACTIVO",
    },
  ]

  const getStockStatus = (stock, minimo) => {
    if (stock <= minimo) {
      return { label: "Stock Bajo", variant: "critical", icon: AlertTriangle }
    }
    return { label: "Normal", variant: "normal", icon: Package }
  }

  const filteredProducts = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producto.codigo.includes(searchTerm) ||
      producto.marca.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="product-management">
      <div className="page-header">
        <div>
          <h2 className="page-title">Gestión de Productos</h2>
          <p className="page-description">Administre el catálogo de productos del almacén</p>
        </div>
        {userRole === "ADMINISTRADOR" && (
          <button className="add-button">
            <Plus size={16} />
            Nuevo Producto
          </button>
        )}
      </div>

      {/* Filtros y búsqueda */}
      <div className="search-card">
        <div className="search-content">
          <div className="search-container">
            <div className="search-input-container">
              <Search className="search-icon" size={16} />
              <input
                placeholder="Buscar por nombre, código o marca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          <button className="filter-button">
            <Filter size={16} />
            Filtros
          </button>
        </div>
      </div>

      {/* Tabla de productos */}
      <div className="products-card">
        <div className="card-header">
          <h3 className="card-title">Catálogo de Productos</h3>
          <p className="card-description">{filteredProducts.length} productos encontrados</p>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Producto</th>
                  <th>Marca</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Zona</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((producto) => {
                  const stockStatus = getStockStatus(producto.stock, producto.stockMinimo)
                  const StatusIcon = stockStatus.icon

                  return (
                    <tr key={producto.id}>
                      <td className="code-cell">{producto.codigo}</td>
                      <td>
                        <div className="product-name">{producto.nombre}</div>
                      </td>
                      <td>{producto.marca}</td>
                      <td>
                        <span className="type-badge">{producto.tipo}</span>
                      </td>
                      <td>S/ {producto.precio.toFixed(2)}</td>
                      <td>
                        <div className="stock-cell">
                          <span className={producto.stock <= producto.stockMinimo ? "stock-low" : ""}>
                            {producto.stock}
                          </span>
                          <span className={`stock-badge ${stockStatus.variant}`}>
                            <StatusIcon size={12} />
                            {stockStatus.label}
                          </span>
                        </div>
                      </td>
                      <td className="zone-cell">{producto.zona}</td>
                      <td>
                        <span className="status-badge">{producto.estado}</span>
                      </td>
                      <td>
                        <div className="actions-cell">
                          <button className="action-button">
                            <Eye size={16} />
                          </button>
                          {userRole === "ADMINISTRADOR" && (
                            <button className="action-button">
                              <Edit size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Resumen de productos con stock bajo */}
      <div className="critical-stock-card">
        <div className="card-header">
          <h3 className="card-title">
            <AlertTriangle className="title-icon" size={20} />
            Productos con Stock Crítico
          </h3>
          <p className="card-description">Productos que requieren reposición inmediata</p>
        </div>
        <div className="card-content">
          <div className="critical-products-grid">
            {filteredProducts
              .filter((p) => p.stock <= p.stockMinimo)
              .map((producto) => (
                <div key={producto.id} className="critical-product-card">
                  <div className="critical-product-header">
                    <h4 className="critical-product-name">{producto.nombre}</h4>
                    <span className="critical-badge">Crítico</span>
                  </div>
                  <div className="critical-product-details">
                    <p>
                      Stock actual: <span className="stock-critical">{producto.stock}</span>
                    </p>
                    <p>Stock mínimo: {producto.stockMinimo}</p>
                    <p>Zona: {producto.zona}</p>
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
