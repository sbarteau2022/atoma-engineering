import { Link } from 'react-router-dom'

export function Docs() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Docs</p>
          <h1>Guides & reference</h1>
          <p>Getting started, runtime, and compliance—kept as dense as the product.</p>
        </div>
      </div>
      <section className="section">
        <div className="container card-grid">
          {[
            ['Quickstart', 'Install the all-in-one app, enable WebGPU, run your first brigade.', '/demo'],
            ['Runtime', 'Rust · Tokio · C++ inference paths and TS bindings.', '/runtime'],
            ['Architecture', 'Planes, supervision, and entry contracts.', '/architecture'],
            ['Compliance', 'SOC 2 mapping, SBOM, adversarial checklists.', '/compliance'],
          ].map(([t, b, to]) => (
            <Link key={t} to={to} className="card" style={{ display: 'block' }}>
              <h3>{t}</h3>
              <p>{b}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
