import { Link } from 'react-router-dom'

export function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <p className="eyebrow">Enter the lab</p>
          <h2>Start free. Ship alone at industrial scale.</h2>
          <p>
            Launch the interactive demo or sign in when you're ready for a full workspace.
            No procurement gate for the first run.
          </p>
          <div className="hero-ctas">
            <Link to="/demo" className="btn btn-primary">
              Launch interactive demo →
            </Link>
            <Link to="/login" className="btn btn-ghost">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
