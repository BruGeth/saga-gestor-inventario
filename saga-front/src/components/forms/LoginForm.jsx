"use client"

import { useState } from "react"
import "./LoginForm.css"

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Usuarios de ejemplo
  const mockUsers = [
    { id: 1, nombre: "Ashlee", apellido: "Garcia", email: "ash.gar@falabella.com", rol: "ADMINISTRADOR" },
    { id: 2, nombre: "Angely", apellido: "Corahua", email: "an.corahua@falabella.com", rol: "ASISTENTE_LOGISTICA" },
    { id: 3, nombre: "Bruno", apellido: "Guerra", email: "bru.guerra@falabella.com", rol: "SUPERVISOR" },
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simular autenticación
    setTimeout(() => {
      const user = mockUsers.find((u) => u.email === email)
      if (user) {
        onLogin(user)
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <i className="icon-building"></i>
          </div>
          <h2 className="login-title">Sistema de Inventario</h2>
          <p className="login-subtitle">Saga Falabella - Mallplaza Comas</p>
        </div>
        <div className="login-content">
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <i className="icon-user"></i>
                <input
                  id="email"
                  type="email"
                  placeholder="usuario@falabella.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-with-icon">
                <i className="icon-lock"></i>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </button>
          </form>

          <div className="test-users">
            <p className="test-users-title">Usuarios de prueba:</p>
            <div className="test-users-list">
              <p>
                <strong>Admin:</strong> ash.gar@falabella.com
              </p>
              <p>
                <strong>Asistente:</strong> an.corahua@falabella.com
              </p>
              <p>
                <strong>Supervisor:</strong> bru.guerra@falabella.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
