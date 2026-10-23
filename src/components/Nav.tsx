import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { navLinks } from '../lib/tokens'
import { useUi } from '../store/ui'

export function Nav() {
  const { menuOpen, toggleMenu, setMenuOpen } = useUi()

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" onClick={() => setMenuOpen(false)} aria-label="Atoma Engineering home">
          <Logo />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="btn btn-ghost" style={{ height: 34, padding: '0 14px', fontSize: 13 }}>
            Sign in
          </Link>
          <Link to="/demo" className="btn btn-primary" style={{ height: 34, padding: '0 14px', fontSize: 13 }}>
            Demo
          </Link>
          <button className="nav-toggle" type="button" aria-label="Menu" onClick={toggleMenu}>
            <span className="mono">{menuOpen ? '×' : '≡'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
