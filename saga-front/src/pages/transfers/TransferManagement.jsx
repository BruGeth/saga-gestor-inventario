"use client"

import { useState } from "react"
import { ArrowRightLeft, Truck, Building, RotateCcw, Plus, Eye, CheckCircle, Clock, XCircle } from "lucide-react"
import "./TransferManagement.css"

function TransferManagement({ userRole }) {
  const [activeTab, setActiveTab] = useState("nueva")
  const [selectedTransferType, setSelectedTransferType] = useState("")

  // Datos simulados de transferencias
  const transferencias = [
    {
      id: "TRF-2025-001",
      tipo: "TIENDA",
      producto: "iPhone 15 Pro Max",
      cantidad: 5,
      destino: "Saga Falabella - Jockey Plaza",
      fecha: "2025-01-22",
      estado: "PENDIENTE",
      responsable: "Angely Corahua",
    },
    {
      id: "TRF-2025-002",
      tipo: "PROVEEDOR",
      producto: 'Samsung TV 55" Dañado',
      cantidad: 1,
      destino: "Samsung Electronics Perú",
      fecha: "2025-01-21",
      estado: "EN_TRANSITO",
      responsable: "Bruno Guerra",
    },
    {
      id: "TRF-2025-003",
      tipo: "OTRO_ALMACEN",
      producto: "Zapatillas Nike Air Max",
      cantidad: 20,
      destino: "Almacén Central - San Isidro",
      fecha: "2025-01-20",
      estado: "ENTREGADO",
      responsable: "Ashlee Garcia",
    },
  ]

  const getStatusIcon = (estado) => {
    switch (estado) {
      case "PENDIENTE":
        return Clock
      case "EN_TRANSITO":
        return Truck
      case "ENTREGADO":
        return CheckCircle
      case "CANCELADO":
        return XCircle
      default:
        return Clock
    }
  }

  const getStatusColor = (estado) => {
    switch (estado) {
      case "PENDIENTE":
        return "secondary"
      case "EN_TRANSITO":
        return "default"
      case "ENTREGADO":
        return "success"
      case "CANCELADO":
        return "critical"
      default:
        return "secondary"
    }
  }

  return (
    <div className="transfer-management">
      <div className="page-header">
        <div>
          <h2 className="page-title">Gestión de Transferencias</h2>
          <p className="page-description">GLI - Gestión de Logística Inversa</p>
        </div>
      </div>

      <div className="tabs">
        <div className="tabs-list">
          <button
            className={`tab-button ${activeTab === "nueva" ? "active" : ""}`}
            onClick={() => setActiveTab("nueva")}
          >
            Nueva Transferencia
          </button>
          <button
            className={`tab-button ${activeTab === "historial" ? "active" : ""}`}
            onClick={() => setActiveTab("historial")}
          >
            Historial
          </button>
          <button
            className={`tab-button ${activeTab === "reportes" ? "active" : ""}`}
            onClick={() => setActiveTab("reportes")}
          >
            Reportes GLI
          </button>
        </div>

        <div className="tab-content">
          {/* Nueva Transferencia */}
          {activeTab === "nueva" && (
            <div className="tab-panel">
              <div className="transfer-grid">
                <div className="transfer-card">
                  <div className="card-header">
                    <h3 className="card-title">
                      <ArrowRightLeft size={20} />
                      Crear Nueva Transferencia
                    </h3>
                    <p className="card-description">Complete los datos para la transferencia o devolución</p>
                  </div>
                  <div className="card-content">
                    <div className="form-group">
                      <label htmlFor="tipo-transferencia">Tipo de Transferencia</label>
                      <select
                        id="tipo-transferencia"
                        value={selectedTransferType}
                        onChange={(e) => setSelectedTransferType(e.target.value)}
                      >
                        <option value="">Seleccione tipo de transferencia</option>
                        <option value="tienda">Transferencia a Tienda</option>
                        <option value="proveedor">Devolución a Proveedor (DAP)</option>
                        <option value="almacen">Transferencia entre Almacenes</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="producto-transferencia">Producto</label>
                      <input id="producto-transferencia" placeholder="Buscar producto por código o nombre..." />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cantidad-transferencia">Cantidad</label>
                        <input id="cantidad-transferencia" type="number" placeholder="0" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="fecha-transferencia">Fecha</label>
                        <input id="fecha-transferencia" type="date" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="destino">Destino</label>
                      <input
                        id="destino"
                        placeholder={
                          selectedTransferType === "tienda"
                            ? "Nombre de la tienda destino"
                            : selectedTransferType === "proveedor"
                              ? "Nombre del proveedor"
                              : "Almacén destino"
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="motivo">Motivo de la Transferencia</label>
                      <textarea id="motivo" placeholder="Describa el motivo de la transferencia..."></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="numero-guia">Número de Guía (Opcional)</label>
                      <input id="numero-guia" placeholder="Número de guía de transporte" />
                    </div>

                    <button className="create-button">
                      <Plus size={16} />
                      Crear Transferencia
                    </button>
                  </div>
                </div>

                {/* Información GLI */}
                <div className="transfer-card">
                  <div className="card-header">
                    <h3 className="card-title">Información GLI</h3>
                    <p className="card-description">Gestión de Logística Inversa - Tipos de transferencia</p>
                  </div>
                  <div className="card-content">
                    <div className="info-card blue">
                      <div className="info-header">
                        <Building size={20} />
                        <h4 className="info-title">Transferencia a Tienda</h4>
                      </div>
                      <p className="info-text">
                        Envío de productos desde almacén hacia tiendas para reposición de stock o pedidos específicos.
                      </p>
                    </div>

                    <div className="info-card orange">
                      <div className="info-header">
                        <RotateCcw size={20} />
                        <h4 className="info-title">Devolución a Proveedor (DAP)</h4>
                      </div>
                      <p className="info-text">
                        Retorno de productos defectuosos, vencidos o no conformes al proveedor original.
                      </p>
                    </div>

                    <div className="info-card green">
                      <div className="info-header">
                        <Truck size={20} />
                        <h4 className="info-title">Transferencia entre Almacenes</h4>
                      </div>
                      <p className="info-text">
                        Redistribución de inventario entre diferentes almacenes para optimizar stock.
                      </p>
                    </div>

                    <div className="info-card gray">
                      <h4 className="info-title">Proceso GLI</h4>
                      <ol className="process-list">
                        <li>1. Identificación del producto</li>
                        <li>2. Clasificación del motivo</li>
                        <li>3. Registro en sistema</li>
                        <li>4. Preparación y empaque</li>
                        <li>5. Envío y seguimiento</li>
                        <li>6. Confirmación de entrega</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Historial de Transferencias */}
          {activeTab === "historial" && (
            <div className="tab-panel">
              <div className="transfer-card">
                <div className="card-header">
                  <h3 className="card-title">Historial de Transferencias</h3>
                  <p className="card-description">Registro completo de todas las transferencias realizadas</p>
                </div>
                <div className="card-content">
                  <div className="table-container">
                    <table className="transfers-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tipo</th>
                          <th>Producto</th>
                          <th>Cantidad</th>
                          <th>Destino</th>
                          <th>Fecha</th>
                          <th>Estado</th>
                          <th>Responsable</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transferencias.map((transferencia) => {
                          const StatusIcon = getStatusIcon(transferencia.estado)
                          const statusColor = getStatusColor(transferencia.estado)

                          return (
                            <tr key={transferencia.id}>
                              <td className="id-cell">{transferencia.id}</td>
                              <td>
                                <span className="type-badge">{transferencia.tipo}</span>
                              </td>
                              <td>{transferencia.producto}</td>
                              <td>{transferencia.cantidad}</td>
                              <td className="destination-cell">{transferencia.destino}</td>
                              <td>{new Date(transferencia.fecha).toLocaleDateString("es-PE")}</td>
                              <td>
                                <span className={`status-badge ${statusColor}`}>
                                  <StatusIcon size={12} />
                                  {transferencia.estado}
                                </span>
                              </td>
                              <td className="responsible-cell">{transferencia.responsable}</td>
                              <td>
                                <button className="action-button">
                                  <Eye size={16} />
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reportes GLI */}
          {activeTab === "reportes" && (
            <div className="tab-panel">
              <div className="reports-grid">
                <div className="transfer-card">
                  <div className="card-header">
                    <h3 className="card-title">Resumen Mensual</h3>
                    <p className="card-description">Transferencias del mes actual</p>
                  </div>
                  <div className="card-content">
                    <div className="report-items">
                      <div className="report-item">
                        <span>Transferencias a Tienda</span>
                        <span className="report-badge">45</span>
                      </div>
                      <div className="report-item">
                        <span>Devoluciones a Proveedor</span>
                        <span className="report-badge">12</span>
                      </div>
                      <div className="report-item">
                        <span>Transferencias entre Almacenes</span>
                        <span className="report-badge">8</span>
                      </div>
                      <div className="report-item total">
                        <span>Total</span>
                        <span className="report-badge primary">65</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transfer-card">
                  <div className="card-header">
                    <h3 className="card-title">Estados de Transferencia</h3>
                    <p className="card-description">Distribución por estado actual</p>
                  </div>
                  <div className="card-content">
                    <div className="report-items">
                      <div className="report-item">
                        <div className="status-item">
                          <Clock size={16} />
                          <span>Pendientes</span>
                        </div>
                        <span className="report-badge secondary">23</span>
                      </div>
                      <div className="report-item">
                        <div className="status-item">
                          <Truck size={16} />
                          <span>En Tránsito</span>
                        </div>
                        <span className="report-badge">15</span>
                      </div>
                      <div className="report-item">
                        <div className="status-item">
                          <CheckCircle size={16} />
                          <span>Entregadas</span>
                        </div>
                        <span className="report-badge secondary">25</span>
                      </div>
                      <div className="report-item">
                        <div className="status-item">
                          <XCircle size={16} />
                          <span>Canceladas</span>
                        </div>
                        <span className="report-badge critical">2</span>
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

export default TransferManagement
