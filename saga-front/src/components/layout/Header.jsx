"use client"
import "./Header.css"
import { Bell, LogOut } from "lucide-react"

function Header({ user, onLogout }) {
  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "ADMINISTRADOR":
        return "role-admin"
      case "SUPERVISOR":
        return "role-supervisor"
      case "ASISTENTE_LOGISTICA":
        return "role-assistant"
      default:
        return "role-default"
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-info">
          <h1 className="header-title">Almacén - Mallplaza Comas</h1>
          <p className="header-date">
            {new Date().toLocaleDateString("es-PE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="header-actions">
          <button className="header-notification-btn">
            <Bell size={20} />
          </button>

          <div className="header-user">
            <div className="header-user-info">
              <p className="header-user-name">
                {user.nombre} {user.apellido}
              </p>
              <span className={`header-user-role ${getRoleBadgeColor(user.rol)}`}>{user.rol.replace("_", " ")}</span>
            </div>
            <div className="header-user-avatar">
              {user.nombre[0]}
              {user.apellido[0]}
            </div>
            <button className="header-logout-btn" onClick={onLogout}>
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
