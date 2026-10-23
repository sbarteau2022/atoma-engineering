import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo'

export function Login() {
  return (
    <div className="auth-wrap">
      <div className="auth-card glass">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LogoMark size={36} />
        </div>
        <h1>Enter the Engineering Lab</h1>
        <p className="sub">
          Enterprise grade for solo developers.
          <br />
          Local-first · WebGPU · Rust runtime.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = '/lab'
          }}
        >
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@company.com" autoComplete="email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Sign in →
          </button>
        </form>
        <div className="auth-divider">or</div>
        <Link to="/demo" className="btn btn-ghost" style={{ width: '100%' }}>
          Continue with interactive demo
        </Link>
        <p className="auth-note">No account required for demo · SOC 2 ready</p>
      </div>
    </div>
  )
}
