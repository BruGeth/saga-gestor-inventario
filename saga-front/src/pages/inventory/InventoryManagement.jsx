"use client"

import { useState } from "react"
import "./InventoryManagement.css"

function InventoryManagement({ userRole }) {
  const [activeTab, setActiveTab] = useState("ingreso")
  const [scannerInput, setScannerInput] = useState("")
  const [selectedZone, setSelectedZone] = useState("")
  const [productData, setProductData] = useState(null)

  const zonas = [
    { id: "zona-a", nombre: "Zona A - Electrónicos", tipo: "ELECTRONICO" },
    { id: "zona-b", nombre: "Zona B - Ropa", tipo: "TEXTIL" },
    { id: "zona-c", nombre: "Zona C - Hogar", tipo: "HOGAR" },
    { id: "zona-d", nombre: "Zona D - Deportes", tipo: "DEPORTIVO" },
  ]

  const handleScan = () => {
    // Simular escaneo de producto
    if (scannerInput) {
      setProductData({
        codigo: scannerInput,
        nombre: "iPhone 15 Pro Max",
        tipo: "ELECTRONICO",
        marca: "Apple",
        precio: 4999.99,
        zonaRecomendada: "zona-a",
      })
    }
  }

  const handleProductIngress = () => {
    // Simular registro de ingreso
    alert("Producto registrado exitosamente en el inventario")
    setScannerInput("")
    setProductData(null)
    setSelectedZone("")
  }

  return (
    <div className="inventory-management">
      <div className="page-header">
        <div>
          <h2 className="page-title">Gestión de Inventario</h2>
          <p className="page-description">Registro y control de productos en almacén</p>
        </div>
      </div>

      <div className="tabs">
        <div className="tabs-list">
          <button
            className={`tab-button ${activeTab === "ingreso" ? "active" : ""}`}
            onClick={() => setActiveTab("ingreso")}
          >
            Ingreso de Productos
          </button>
          <button
            className={`tab-button ${activeTab === "consulta" ? "active" : ""}`}
            onClick={() => setActiveTab("consulta")}
          >
            Consulta de Stock
          </button>
          <button
            className={`tab-button ${activeTab === "daniados" ? "active" : ""}`}
            onClick={() => setActiveTab("daniados")}
          >
            Productos Dañados
          </button>
        </div>

        <div className="tab-content">
          {/* Ingreso de Productos */}
          {activeTab === "ingreso" && (
            <div className="tab-panel">
              <div className="inventory-grid">
                {/* Scanner RF */}
                <div className="inventory-card">
                  <div className="card-header">
                    <h3 className="card-title">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      Escáner de Radiofrecuencia
                    </h3>
                    <p className="card-description">Escanee el código de barras del producto</p>
                  </div>
                  <div className="card-content">
                    <div className="form-group">
                      <label htmlFor="scanner">Código de Barras</label>
                      <div className="input-with-button">
                        <input
                          id="scanner"
                          placeholder="Escanee o ingrese código..."
                          value={scannerInput}
                          onChange={(e) => setScannerInput(e.target.value)}
                          className="code-input"
                        />
                        <button onClick={handleScan} disabled={!scannerInput} className="scan-button">
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
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {productData && (
                      <div className="product-found">
                        <div className="product-found-header">
                          <svg
                            className="check-icon"
                            fill="none"
                            stroke="var(--falabella-green)"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Producto Encontrado</span>
                        </div>
                        <div className="product-found-details">
                          <p>
                            <strong>Código:</strong> {productData.codigo}
                          </p>
                          <p>
                            <strong>Nombre:</strong> {productData.nombre}
                          </p>
                          <p>
                            <strong>Marca:</strong> {productData.marca}
                          </p>
                          <p>
                            <strong>Tipo:</strong> {productData.tipo}
                          </p>
                          <p>
                            <strong>Precio:</strong> S/ {productData.precio}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Formulario de Ingreso */}
                <div className="inventory-card">
                  <div className="card-header">
                    <h3 className="card-title">
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
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                      Registro de Ingreso
                    </h3>
                    <p className="card-description">Complete los datos del ingreso</p>
                  </div>
                  <div className="card-content">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input id="cantidad" type="number" placeholder="0" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="precio">Precio Unitario</label>
                        <input id="precio" type="number" step="0.01" placeholder="0.00" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="zona">Zona de Almacenamiento</label>
                      <select id="zona" value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)}>
                        <option value="">Seleccione zona según Plan Z</option>
                        {zonas.map((zona) => (
                          <option key={zona.id} value={zona.id}>
                            {zona.nombre}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="proveedor">Proveedor</label>
                      <input id="proveedor" placeholder="Nombre del proveedor" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="factura">Número de Factura</label>
                      <input id="factura" placeholder="F001-00001234" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="observaciones">Observaciones</label>
                      <textarea id="observaciones" placeholder="Observaciones adicionales..."></textarea>
                    </div>

                    <button
                      onClick={handleProductIngress}
                      className="register-button"
                      disabled={!productData || !selectedZone}
                    >
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Registrar Ingreso
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Consulta de Stock */}
          {activeTab === "consulta" && (
            <div className="tab-panel">
              <div className="inventory-card">
                <div className="card-header">
                  <h3 className="card-title">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Consulta de Stock por Zona
                  </h3>
                  <p className="card-description">Consulte el inventario disponible por zonas</p>
                </div>
                <div className="card-content">
                  <div className="zones-grid">
                    {zonas.map((zona) => (
                      <div key={zona.id} className="zone-card">
                        <div className="zone-card-content">
                          <h4 className="zone-title">{zona.nombre}</h4>
                          <div className="zone-count">{Math.floor(Math.random() * 1000) + 500}</div>
                          <p className="zone-label">productos</p>
                          <span className="zone-type-badge">{zona.tipo}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Productos Dañados */}
          {activeTab === "daniados" && (
            <div className="tab-panel">
              <div className="inventory-card">
                <div className="card-header">
                  <h3 className="card-title">
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
                    Clasificación de Productos Dañados
                  </h3>
                  <p className="card-description">Registre y clasifique productos dañados según Clase 0 o Clase 100</p>
                </div>
                <div className="card-content">
                  <div className="damaged-products-grid">
                    <div className="damaged-form">
                      <div className="form-group">
                        <label htmlFor="producto-daniado">Producto</label>
                        <input id="producto-daniado" placeholder="Buscar producto..." />
                      </div>

                      <div className="form-group">
                        <label htmlFor="clasificacion">Clasificación</label>
                        <select id="clasificacion">
                          <option value="">Seleccione clasificación</option>
                          <option value="clase-0">Clase 0 - Pérdida Total</option>
                          <option value="clase-100">Clase 100 - Reparable</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="cantidad-daniada">Cantidad Dañada</label>
                        <input id="cantidad-daniada" type="number" placeholder="0" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="observacion-dano">Descripción del Daño</label>
                        <textarea id="observacion-dano" placeholder="Describa el tipo de daño..."></textarea>
                      </div>

                      <button className="register-button">Registrar Producto Dañado</button>
                    </div>

                    <div className="damaged-info">
                      <h4 className="info-title">Información de Clasificación</h4>

                      <div className="info-card red">
                        <h5 className="info-card-title">Clase 0 - Pérdida Total</h5>
                        <p className="info-card-text">
                          Productos que no pueden ser reparados o vendidos. Se registran como merma y se descuentan del
                          inventario.
                        </p>
                      </div>

                      <div className="info-card yellow">
                        <h5 className="info-card-title">Clase 100 - Reparable</h5>
                        <p className="info-card-text">
                          Productos con daños menores que pueden ser reparados o vendidos con descuento. Se mantienen en
                          inventario.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InventoryManagement
