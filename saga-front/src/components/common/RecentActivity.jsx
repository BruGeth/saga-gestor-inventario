import "./RecentActivity.css"

const RecentActivity = ({ activities = [] }) => {
  const defaultActivities = [
    {
      id: 1,
      tipo: "ingreso",
      descripcion: "Ingreso de 50 unidades de iPhone 15 Pro",
      usuario: "Angely Corahua",
      fecha: "2025-01-22 14:30",
      zona: "Zona A",
    },
    {
      id: 2,
      tipo: "transferencia",
      descripcion: "Transferencia a Jockey Plaza - 15 unidades",
      usuario: "Bruno Guerra",
      fecha: "2025-01-22 13:15",
      zona: "Zona B",
    },
    {
      id: 3,
      tipo: "dañado",
      descripcion: "Producto clasificado como Clase 100",
      usuario: "Ashlee Garcia",
      fecha: "2025-01-22 12:45",
      zona: "Zona A",
    },
    {
      id: 4,
      tipo: "consulta",
      descripcion: "Consulta de stock - Zona C",
      usuario: "Angely Corahua",
      fecha: "2025-01-22 11:20",
      zona: "Zona C",
    },
  ]

  const recentActivities = activities.length > 0 ? activities : defaultActivities

  const getActivityIcon = (tipo) => {
    switch (tipo) {
      case "ingreso":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      case "transferencia":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline
              points="17 1 21 5 17 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M3 11V9C3 7.89543 3.89543 7 5 7H21" stroke="currentColor" strokeWidth="2" />
            <polyline
              points="7 23 3 19 7 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M21 13V15C21 16.1046 20.1046 17 19 17H3" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      case "dañado":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.29 3.86L1.82 18C1.64486 18.3024 1.55625 18.6453 1.56518 18.9928C1.57411 19.3402 1.68043 19.6781 1.87086 19.9715C2.06129 20.2649 2.32949 20.5019 2.64632 20.6584C2.96314 20.8149 3.31707 20.8852 3.67 20.86H20.33C20.6829 20.8852 21.0369 20.8149 21.3537 20.6584C21.6705 20.5019 21.9387 20.2649 22.1291 19.9715C22.3196 19.6781 22.4259 19.3402 22.4348 18.9928C22.4437 18.6453 22.3551 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="9"
              x2="12"
              y2="13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
          </svg>
        )
      case "consulta":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="8" r="1" fill="currentColor" />
          </svg>
        )
    }
  }

  const getActivityColor = (tipo) => {
    switch (tipo) {
      case "ingreso":
        return "#10b981"
      case "transferencia":
        return "#3b82f6"
      case "dañado":
        return "#ef4444"
      case "consulta":
        return "#6b7280"
      default:
        return "#6b7280"
    }
  }

  const formatTime = (fecha) => {
    const date = new Date(fecha)
    const now = new Date()
    const diffInMinutes = Math.floor((now - date) / (1000 * 60))

    if (diffInMinutes < 60) {
      return `Hace ${diffInMinutes} min`
    } else if (diffInMinutes < 1440) {
      return `Hace ${Math.floor(diffInMinutes / 60)} h`
    } else {
      return date.toLocaleDateString("es-PE")
    }
  }

  return (
    <div className="recent-activity">
      <div className="recent-activity-header">
        <h3 className="recent-activity-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <polyline
              points="12,6 12,12 16,14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Actividad Reciente
        </h3>
        <p className="recent-activity-subtitle">Últimas acciones realizadas en el sistema</p>
      </div>

      <div className="recent-activity-content">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div
              className="activity-icon"
              style={{
                backgroundColor: getActivityColor(activity.tipo),
              }}
            >
              {getActivityIcon(activity.tipo)}
            </div>
            <div className="activity-content">
              <div className="activity-description">{activity.descripcion}</div>
              <div className="activity-meta">
                <span className="activity-user">{activity.usuario}</span>
                <span className="activity-separator">•</span>
                <span className="activity-zone">{activity.zona}</span>
                <span className="activity-separator">•</span>
                <span className="activity-time">{formatTime(activity.fecha)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-activity-footer">
        <button className="recent-activity-view-all">Ver toda la actividad</button>
      </div>
    </div>
  )
}

export default RecentActivity
