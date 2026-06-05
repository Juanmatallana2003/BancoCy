import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [saldo, setSaldo] = useState(50000)
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [cuenta, setCuenta] = useState('')
  const [monto, setMonto] = useState('')
  const [mensajeExito, setMensajeExito] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = () => setIsLoggedIn(true)

  const handleTransferir = () => {
    setMensajeExito(false)
    setError('')
    const montoNum = parseFloat(monto)
    if (!cuenta.trim()) { setError('Ingrese una cuenta destino.'); return }
    if (!monto || isNaN(montoNum) || montoNum <= 0) { setError('Ingrese un monto válido.'); return }
    if (montoNum > saldo) { setError('Fondos insuficientes.'); return }
    setSaldo(prev => prev - montoNum)
    setMensajeExito(true)
    setCuenta('')
    setMonto('')
    setTimeout(() => setMensajeExito(false), 4000)
  }

  const handleLogout = () => {
    setIsLoggedIn(false); setSaldo(50000); setUsuario(''); setClave('')
    setCuenta(''); setMonto(''); setMensajeExito(false); setError('')
  }

  if (!isLoggedIn) {
    return (
      <div className="app-container">
        <div className="card login-card">
          <div className="card-header">
            <div className="logo-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#g1)"/><path d="M14 34V20L24 14L34 20V34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 34V26H28V34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="24" cy="22" r="2" fill="#fff"/><defs><linearGradient id="g1" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#2563EB"/><stop offset="1" stopColor="#1E40AF"/></linearGradient></defs></svg>
            </div>
            <h1>Bienvenido a Mini Banco</h1>
            <p className="subtitle">Ingrese sus credenciales para continuar</p>
          </div>
          <div className="card-body">
            <div className="input-group">
              <label htmlFor="login-usuario">Usuario</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input id="login-usuario" type="text" placeholder="Ingrese su usuario" data-cy="login-usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="login-clave">Contraseña</label>
              <div className="input-wrapper">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input id="login-clave" type="password" placeholder="Ingrese su contraseña" data-cy="login-clave" value={clave} onChange={e => setClave(e.target.value)} />
              </div>
            </div>
            <button className="btn btn-primary" data-cy="btn-ingresar" onClick={handleLogin}>
              <span>Ingresar</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div className="card-footer"><p>Entorno de pruebas · No use datos reales</p></div>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="card dashboard-card">
        <div className="card-header">
          <div className="dashboard-top-bar">
            <div className="logo-small">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#g2)"/><path d="M14 34V20L24 14L34 20V34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 34V26H28V34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="24" cy="22" r="2" fill="#fff"/><defs><linearGradient id="g2" x1="0" y1="0" x2="48" y2="48"><stop stopColor="#2563EB"/><stop offset="1" stopColor="#1E40AF"/></linearGradient></defs></svg>
              <span className="logo-text">Mini Banco</span>
            </div>
            <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </div>
        <div className="saldo-section">
          <p className="saldo-label">Saldo disponible</p>
          <h2 className="saldo-amount" data-cy="saldo-actual">${saldo}</h2>
          <div className="saldo-badge"><span className="badge-dot"></span>Cuenta activa</div>
        </div>
        <div className="transfer-section">
          <h3 className="section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
            Transferencia Rápida
          </h3>
          <div className="input-group">
            <label htmlFor="input-cuenta">Cuenta destino</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
              <input id="input-cuenta" type="text" placeholder="Ej: 1234-5678-9012" data-cy="input-cuenta" value={cuenta} onChange={e => setCuenta(e.target.value)} />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="input-monto">Monto a transferir</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <input id="input-monto" type="number" placeholder="Ingrese el monto" data-cy="input-monto" value={monto} onChange={e => setMonto(e.target.value)} min="0" />
            </div>
          </div>
          {error && <div className="mensaje-error"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>{error}</div>}
          <button className="btn btn-primary" data-cy="btn-transferir" onClick={handleTransferir}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
            <span>Transferir Dinero</span>
          </button>
          {mensajeExito && <div className="mensaje-exito" data-cy="mensaje-exito"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Transferencia exitosa</span></div>}
        </div>
        <div className="card-footer"><p>Mini Banco · Entorno de pruebas QA</p></div>
      </div>
    </div>
  )
}

export default App
