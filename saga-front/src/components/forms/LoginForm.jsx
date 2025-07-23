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
            <svg
              className="login-logo-icon"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-3 4h2a1 1 0 001-1v-1a1 1 0 00-1-1h-2a1 1 0 00-1 1v1a1 1 0 001 1z"
              />
            </svg>
          </div>
          <h2 className="login-title">Sistema de Inventario</h2>
          <p className="login-subtitle">Saga Falabella - Mallplaza Comas</p>
        </div>
        <div className="login-content">
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-with-icon">
                <svg
                  className="input-icon"
                  fill="none"
                  stroke="#a0aec0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
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
                <svg
                  className="input-icon"
                  fill="none"
                  stroke="#a0aec0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
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
