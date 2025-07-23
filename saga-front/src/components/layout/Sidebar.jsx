"use client"
import "./Sidebar.css"
import { LayoutDashboard, Package, MapPin, ArrowRightLeft, FileText, Warehouse } from "lucide-react"

function Sidebar({ currentPage, onPageChange, userRole }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
    },
    {
      id: "inventory",
      label: "Inventario",
      icon: Warehouse,
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
    },
    {
      id: "products",
      label: "Productos",
      icon: Package,
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
    },
    {
      id: "zones",
      label: "Zonas",
      icon: MapPin,
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
    },
    {
      id: "transfers",
      label: "Transferencias",
      icon: ArrowRightLeft,
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
    },
    {
      id: "reports",
      label: "Reportes",
      icon: FileText,
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
    },
  ]

  const filteredItems = menuItems.filter((item) => item.roles.includes(userRole))

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Warehouse size={24} />
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
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
