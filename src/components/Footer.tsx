import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 14, fontSize: 13, color: 'var(--fog)', maxWidth: 260, lineHeight: 1.55 }}>
              Enterprise-grade engineering and autonomy for solo developers.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <Link to="/architecture">Architecture</Link>
            <Link to="/runtime">Runtime</Link>
            <Link to="/topology">Topology</Link>
            <Link to="/compliance">Compliance</Link>
          </div>
          <div>
            <h4>Lab</h4>
            <Link to="/demo">Interactive demo</Link>
            <Link to="/lab">Engineering Lab</Link>
            <Link to="/login">Sign in</Link>
            <a href="https://github.com/sbarteau2022" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/enterprise">Enterprise</Link>
            <Link to="/docs">Docs</Link>
            <a href="mailto:sbarteau2022@gmail.com">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Atoma Engineering. All rights reserved.</span>
          <span className="mono">Available on macOS · Linux · Windows</span>
        </div>
      </div>
    </footer>
  )
}
