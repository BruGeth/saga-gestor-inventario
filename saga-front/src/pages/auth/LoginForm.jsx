import React, { useState } from "react";

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const mockUsers = [
    { id: 1, nombre: "Ashlee", apellido: "Garcia", email: "ash.gar@falabella.com", rol: "ADMINISTRADOR" },
    { id: 2, nombre: "Angely", apellido: "Corahua", email: "an.corahua@falabella.com", rol: "ASISTENTE_LOGISTICA" },
    { id: 3, nombre: "Bruno", apellido: "Guerra", email: "bru.guerra@falabella.com", rol: "SUPERVISOR" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const user = mockUsers.find((u) => u.email === email);
      if (user) {
        onLogin(user);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F5F5" }}>
      <form onSubmit={handleLogin} style={{ background: "#fff", padding: "32px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", minWidth: "320px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "16px" }}>Sistema de Inventario</h2>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "4px" }} />
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: "10px", background: "#AAD63E", color: "#000", border: "none", borderRadius: "8px", fontWeight: "bold" }}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
