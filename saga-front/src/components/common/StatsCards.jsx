import "./StatsCards.css"

const StatsCards = ({ data, userRole }) => {
  const cards = [
    {
      title: "Total Productos",
      value: data.totalProducts?.toLocaleString() || "0",
      change: "+12%",
      changeType: "positive",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="7.5,4.21 12,6.81 16.5,4.21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="7.5,19.79 7.5,14.6 3,12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="21,12 16.5,14.6 16.5,19.79"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="12,22.08 12,17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Stock Bajo",
      value: data.lowStock?.toString() || "0",
      change: "+3",
      changeType: "negative",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      ),
      color: "yellow",
    },
    {
      title: "Productos Dañados",
      value: data.damagedProducts?.toString() || "0",
      change: "+2",
      changeType: "negative",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      color: "red",
    },
    {
      title: "Transferencias Hoy",
      value: data.todayTransfers?.toString() || "0",
      change: "+8%",
      changeType: "positive",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="23 6 13.5 15.5 8.5 10.5 1 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="17 6 23 6 23 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "green",
    },
  ]

  return (
    <div className="stats-cards">
      {cards.map((card, index) => (
        <div key={index} className={`stats-card stats-card-${card.color}`}>
          <div className="stats-card-header">
            <div className="stats-card-title">{card.title}</div>
            <div className="stats-card-icon">{card.icon}</div>
          </div>
          <div className="stats-card-content">
            <div className="stats-card-value">{card.value}</div>
            <div className={`stats-card-change stats-card-change-${card.changeType}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  points={card.changeType === "positive" ? "7 14 12 9 17 14" : "7 10 12 15 17 10"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {card.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
