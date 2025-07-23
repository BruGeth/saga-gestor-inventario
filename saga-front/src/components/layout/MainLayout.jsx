import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAuth } from "../../hooks/useAuth";
import "./MainLayout.css";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="main-layout">
      <Header user={user} onLogout={logout} onToggleSidebar={handleToggleSidebar} />
      <div className="main-layout-body">
        <Sidebar
          userRole={user?.rol}
          collapsed={sidebarCollapsed}
          onToggleCollapse={handleToggleSidebar}
          className={sidebarCollapsed ? "sidebar sidebar-collapsed" : "sidebar"}
        />
        <main className="main-layout-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
