"use client"
import "./Sidebar.css"

function Sidebar({ currentPage, onPageChange, userRole }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard-icon",
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
    },
    {
      id: "inventory",
      label: "Inventario",
      icon: "warehouse-icon",
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
    },
    {
      id: "products",
      label: "Productos",
      icon: "package-icon",
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
    },
    {
      id: "zones",
      label: "Zonas",
      icon: "map-pin-icon",
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
    },
    {
      id: "transfers",
      label: "Transferencias",
      icon: "transfer-icon",
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
    },
    {
      id: "reports",
      label: "Reportes",
      icon: "file-text-icon",
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
    },
  ]

  const filteredItems = menuItems.filter((item) => item.roles.includes(userRole))

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <i className="warehouse-icon"></i>
        </div>
        <div className="sidebar-title">
          <h2>Saga Falabella</h2>
          <p>Sistema de Inventario</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`sidebar-nav-item ${currentPage === item.id ? "active" : ""}`}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
