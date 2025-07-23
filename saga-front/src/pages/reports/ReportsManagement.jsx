"use client"

import { useState } from "react"
import { FileText, Download, TrendingUp, AlertTriangle, Package, BarChart3, PieChart } from "lucide-react"
import "./ReportsManagement.css"

function ReportsManagement({ userRole }) {
  const [selectedPeriod, setSelectedPeriod] = useState("mes-actual")
  const [selectedZone, setSelectedZone] = useState("todas")

  // Datos simulados para reportes
  const reporteInventario = [
    { zona: "Zona A - Electrónicos", productos: 245, valor: 2850000, rotacion: "Alta" },
    { zona: "Zona B - Ropa", productos: 890, valor: 450000, rotacion: "Media" },
    { zona: "Zona C - Hogar", productos: 156, valor: 680000, rotacion: "Baja" },
    { zona: "Zona D - Deportes", productos: 234, valor: 320000, rotacion: "Alta" },
  ]

  const reporteDaniados = [
    { producto: "iPhone 15 Pro", clase: "CLASE_100", cantidad: 2, costo: 9999.98, fecha: "2025-01-20" },
    { producto: 'Samsung TV 55"', clase: "CLASE_0", cantidad: 1, costo: 2499.99, fecha: "2025-01-19" },
    { producto: "Laptop HP", clase: "CLASE_100", cantidad: 1, costo: 2199.99, fecha: "2025-01-18" },
  ]

  const metricas = {
    totalProductos: 1525,
    valorTotal: 4300000,
    productosStockBajo: 23,
    productosDaniados: 8,
    transferenciasHoy: 15,
    rotacionPromedio: 85,
  }

  return (
    <div className="reports-management">
      <div className="page-header">
        <div>
          <h2 className="page-title">Reportes y Análisis</h2>
          <p className="page-description">Informes detallados del sistema de inventario</p>
        </div>
        <div className="header-actions">
          <select className="period-select" value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
            <option value="hoy">Hoy</option>
            <option value="semana">Esta Semana</option>
            <option value="mes-actual">Mes Actual</option>
            <option value="trimestre">Trimestre</option>
          </select>
          <button className="export-button">
            <Download size={16} />
            Exportar
          </button>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Total Productos</p>
              <p className="metric-value">{metricas.totalProductos.toLocaleString()}</p>
            </div>
            <Package className="metric-icon blue" size={32} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Valor Total</p>
              <p className="metric-value">S/ {(metricas.valorTotal / 1000000).toFixed(1)}M</p>
            </div>
            <TrendingUp className="metric-icon green" size={32} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Stock Bajo</p>
              <p className="metric-value yellow">{metricas.productosStockBajo}</p>
            </div>
            <AlertTriangle className="metric-icon orange" size={32} />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Rotación</p>
              <p className="metric-value blue">{metricas.rotacionPromedio}%</p>
            </div>
            <BarChart3 className="metric-icon blue" size={32} />
          </div>
        </div>
      </div>

      <div className="tabs">
        <div className="tabs-list">
          <button className="tab-button active">Inventario</button>
          <button className="tab-button">Productos Dañados</button>
          <button className="tab-button">Transferencias</button>
          <button className="tab-button">Auditoría</button>
        </div>

        <div className="tab-content">
          {/* Reporte de Inventario */}
          <div className="tab-panel">
            <div className="reports-card">
              <div className="card-header">
                <h3 className="card-title">
                  <BarChart3 size={20} />
                  Reporte de Inventario por Zona
                </h3>
                <p className="card-description">Análisis detallado del inventario según Plan Z</p>
              </div>
              <div className="card-content">
                <div className="table-container">
                  <table className="reports-table">
                    <thead>
                      <tr>
                        <th>Zona</th>
                        <th>Total Productos</th>
                        <th>Valor Inventario</th>
                        <th>Rotación</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reporteInventario.map((zona, index) => (
                        <tr key={index}>
                          <td className="zone-name">{zona.zona}</td>
                          <td>{zona.productos}</td>
                          <td>S/ {zona.valor.toLocaleString()}</td>
                          <td>
                            <span
                              className={`rotation-badge ${
                                zona.rotacion === "Alta" ? "high" : zona.rotacion === "Media" ? "medium" : "low"
                              }`}
                            >
                              {zona.rotacion}
                            </span>
                          </td>
                          <td>
                            <span className="status-badge active">Activa</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reporte de Productos Dañados */}
            <div className="reports-card">
              <div className="card-header">
                <h3 className="card-title">
                  <AlertTriangle className="title-icon red" size={20} />
                  Reporte de Productos Dañados
                </h3>
                <p className="card-description">Análisis de productos clasificados como Clase 0 y Clase 100</p>
              </div>
              <div className="card-content">
                {/* Resumen */}
                <div className="damaged-summary">
                  <div className="summary-item red">
                    <div className="summary-content">
                      <p className="summary-number">{reporteDaniados.filter((p) => p.clase === "CLASE_0").length}</p>
                      <p className="summary-label">Clase 0 - Pérdida Total</p>
                    </div>
                  </div>
                  <div className="summary-item orange">
                    <div className="summary-content">
                      <p className="summary-number">{reporteDaniados.filter((p) => p.clase === "CLASE_100").length}</p>
                      <p className="summary-label">Clase 100 - Reparable</p>
                    </div>
                  </div>
                  <div className="summary-item green">
                    <div className="summary-content">
                      <p className="summary-number">
                        S/ {reporteDaniados.reduce((sum, p) => sum + p.costo, 0).toLocaleString()}
                      </p>
                      <p className="summary-label">Costo Total</p>
                    </div>
                  </div>
                </div>

                {/* Tabla detallada */}
                <div className="table-container">
                  <table className="reports-table">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Clasificación</th>
                        <th>Cantidad</th>
                        <th>Costo Estimado</th>
                        <th>Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reporteDaniados.map((item, index) => (
                        <tr key={index}>
                          <td className="product-name">{item.producto}</td>
                          <td>
                            <span className={`class-badge ${item.clase === "CLASE_0" ? "critical" : "secondary"}`}>
                              {item.clase}
                            </span>
                          </td>
                          <td>{item.cantidad}</td>
                          <td>S/ {item.costo.toLocaleString()}</td>
                          <td>{new Date(item.fecha).toLocaleDateString("es-PE")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reporte de Transferencias */}
            <div className="reports-card">
              <div className="card-header">
                <h3 className="card-title">
                  <PieChart size={20} />
                  Reporte de Transferencias GLI
                </h3>
                <p className="card-description">Análisis de la Gestión de Logística Inversa</p>
              </div>
              <div className="card-content">
                <div className="transfers-grid">
                  <div className="transfers-section">
                    <h4 className="section-title">Transferencias por Tipo</h4>
                    <div className="transfer-items">
                      <div className="transfer-item">
                        <span>A Tiendas</span>
                        <span className="transfer-badge">45 (69%)</span>
                      </div>
                      <div className="transfer-item">
                        <span>A Proveedores</span>
                        <span className="transfer-badge">12 (18%)</span>
                      </div>
                      <div className="transfer-item">
                        <span>Entre Almacenes</span>
                        <span className="transfer-badge">8 (13%)</span>
                      </div>
                    </div>
                  </div>

                  <div className="transfers-section">
                    <h4 className="section-title">Estados Actuales</h4>
                    <div className="transfer-items">
                      <div className="transfer-item">
                        <span>Pendientes</span>
                        <span className="transfer-badge secondary">23</span>
                      </div>
                      <div className="transfer-item">
                        <span>En Tránsito</span>
                        <span className="transfer-badge">15</span>
                      </div>
                      <div className="transfer-item">
                        <span>Completadas</span>
                        <span className="transfer-badge secondary">25</span>
                      </div>
                      <div className="transfer-item">
                        <span>Canceladas</span>
                        <span className="transfer-badge critical">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Auditoría del Sistema */}
            <div className="reports-card">
              <div className="card-header">
                <h3 className="card-title">
                  <FileText size={20} />
                  Auditoría del Sistema
                </h3>
                <p className="card-description">Registro de actividades y cambios en el sistema</p>
              </div>
              <div className="card-content">
                <div className="audit-section">
                  <div className="activity-card">
                    <div className="activity-header">
                      <span className="activity-title">Actividad Reciente</span>
                      <span className="activity-badge">Últimas 24 horas</span>
                    </div>
                    <div className="activity-list">
                      <p>• 156 productos ingresados al sistema</p>
                      <p>• 23 consultas de stock realizadas</p>
                      <p>• 8 productos clasificados como dañados</p>
                      <p>• 15 transferencias procesadas</p>
                      <p>• 3 usuarios activos en el sistema</p>
                    </div>
                  </div>

                  {userRole === "ADMINISTRADOR" && (
                    <div className="admin-access-card">
                      <h4 className="admin-title">Acceso Administrativo</h4>
                      <p className="admin-description">
                        Como administrador, tiene acceso completo a los registros de auditoría.
                      </p>
                      <button className="admin-button">
                        <FileText size={16} />
                        Ver Auditoría Completa
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsManagement
