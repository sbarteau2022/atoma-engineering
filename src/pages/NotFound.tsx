import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="auth-wrap">
      <div style={{ textAlign: 'center' }}>
        <p className="eyebrow">404</p>
        <h1 className="display" style={{ fontSize: 36, margin: '12px 0' }}>Route not found</h1>
        <p style={{ color: 'var(--fog)', marginBottom: 20 }}>This path is not in the Atoma graph.</p>
        <Link to="/" className="btn btn-primary">Return home</Link>
      </div>
    </div>
  )
}
