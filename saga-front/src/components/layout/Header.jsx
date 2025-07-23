"use client"
import "./Header.css"

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
            <svg
              className="header-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
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
              <svg
                className="header-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
