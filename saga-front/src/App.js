"use client"

import { useState } from "react"
import LoginForm from "./components/forms/LoginForm"
import Dashboard from "./pages/dashboard/Dashboard"
import InventoryManagement from "./pages/inventory/InventoryManagement"
import ProductManagement from "./pages/products/ProductManagement"
import ZoneManagement from "./pages/zones/ZoneManagement"
import TransferManagement from "./pages/transfers/TransferManagement"
import ReportsManagement from "./pages/reports/ReportsManagement"
import Sidebar from "./components/layout/Sidebar"
import Header from "./components/layout/Header"
import "./styles/global.css"
import "./styles/App.css"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentPage, setCurrentPage] = useState("dashboard")

  if (!currentUser) {
    return <LoginForm onLogin={setCurrentUser} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard userRole={currentUser.rol} />
      case "inventory":
        return <InventoryManagement userRole={currentUser.rol} />
      case "products":
        return <ProductManagement userRole={currentUser.rol} />
      case "zones":
        return <ZoneManagement userRole={currentUser.rol} />
      case "transfers":
        return <TransferManagement userRole={currentUser.rol} />
      case "reports":
        return <ReportsManagement userRole={currentUser.rol} />
      default:
        return <Dashboard userRole={currentUser.rol} />
    }
  }

  return (
    <div className="app-container">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} userRole={currentUser.rol} />
      <div className="main-content">
        <Header user={currentUser} onLogout={() => setCurrentUser(null)} />
        <main className="page-content">{renderPage()}</main>
      </div>
    </div>
  )
}

export default App
