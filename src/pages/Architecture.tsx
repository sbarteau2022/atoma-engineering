import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'

export function Architecture() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Architecture</p>
          <h1>Systems designed for solo industrial scale.</h1>
          <p>
            Layered control plane, deterministic runtime path, and brigade topology—so one developer
            can operate with platform-team clarity.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container two-col">
          <div className="feature-list">
            {[
              ['01', 'Entry plane', 'CLI, MCP, and project launch enter at the tissue tier by default—goals decompose into phases, not free-form chaos.'],
              ['02', 'Control plane', 'Auth, projects, model pins, and artifact manifests. OAuth and tokens without surrendering local residency.'],
              ['03', 'Execution plane', 'Only the bottom tier holds the tool executor on the supervised path. Supervisors cannot mutate the workspace by accident.'],
              ['04', 'Witness plane', 'Brigade comms, audit ledger, and proof streams stay visible—every agent turn is attributable.'],
            ].map(([n, t, b]) => (
              <div key={n} className="feature-item">
                <div className="ico">{n}</div>
                <div>
                  <h4>{t}</h4>
                  <p>{b}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="idx">PIPELINE</div>
            <h3>From goal → verified worktree</h3>
            <p style={{ marginBottom: 16 }}>
              Orchestrator assembles units. Kernel binds WebGPU memory. Topology broker synchronizes
              state. Compliance auditor writes design.md traces. You authorize the build.
            </p>
            <div className="meta">
              <span className="chip ok"><span className="dot" />Verified</span>
              <span className="chip">MSL</span>
              <span className="chip">DAG</span>
            </div>
            <Link to="/topology" className="btn btn-ghost" style={{ marginTop: 20, width: '100%' }}>
              See topology →
            </Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
