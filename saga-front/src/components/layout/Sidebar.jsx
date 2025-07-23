"use client"
import "./Sidebar.css"

function Sidebar({ currentPage, onPageChange, userRole }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
      svg: (
        <svg
          className="sidebar-nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v4m8-4v4" />
        </svg>
      ),
    },
    {
      id: "inventory",
      label: "Inventario",
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
      svg: (
        <svg
          className="sidebar-nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7l9-4 9 4v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
        </svg>
      ),
    },
    {
      id: "products",
      label: "Productos",
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
      svg: (
        <svg
          className="sidebar-nav-icon"
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
      ),
    },
    {
      id: "zones",
      label: "Zonas",
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
      svg: (
        <svg
          className="sidebar-nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "transfers",
      label: "Transferencias",
      roles: ["ADMINISTRADOR", "SUPERVISOR", "ASISTENTE_LOGISTICA"],
      svg: (
        <svg
          className="sidebar-nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      id: "reports",
      label: "Reportes",
      roles: ["ADMINISTRADOR", "SUPERVISOR"],
      svg: (
        <svg
          className="sidebar-nav-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ]

  const filteredItems = menuItems.filter((item) => item.roles.includes(userRole))

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <svg
            className="sidebar-logo-icon"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7l9-4 9 4v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
          </svg>
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
            {item.svg}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
