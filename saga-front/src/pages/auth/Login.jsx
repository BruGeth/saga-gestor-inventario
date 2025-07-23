import LoginForm from "../../components/forms/LoginForm"
import "./Login.css"

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <h1 className="login-title">Sistema de Inventario</h1>
          <p className="login-subtitle">Saga Falabella - Mallplaza Comas</p>
        </div>

        <LoginForm />

        <div className="login-footer">
          <div className="test-users">
            <p className="test-users-title">Usuarios de prueba:</p>
            <div className="test-user-list">
              <div className="test-user">
                <strong>Admin:</strong> ash.gar@falabella.com
              </div>
              <div className="test-user">
                <strong>Asistente:</strong> an.corahua@falabella.com
              </div>
              <div className="test-user">
                <strong>Supervisor:</strong> bru.guerra@falabella.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
