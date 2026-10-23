import { CtaBand } from '../components/CtaBand'

export function Topology() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Topology</p>
          <h1>Real-time DAGs. Live substrate.</h1>
          <p>
            Operational boards for agent brigades—assignment protocols, fault routing, and graph
            views that stay honest under adversarial pressure.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container two-col">
          <div>
            <h2 className="display" style={{ fontSize: 28, marginBottom: 14 }}>Brigade model</h2>
            <p style={{ color: 'var(--fog)', marginBottom: 20 }}>
              Specialized units—Orchestrator, MSL Kernel, Topology Broker, Compliance Auditor—
              work siloed worktrees with serialized real-time constraints.
            </p>
            <div className="feature-list">
              {[
                ['O', 'Orchestrator', 'Assembles and verifies the worktree; holds session authority.'],
                ['K', 'MSL Kernel Unit', 'Binds WebGPU memory; scaffolds dynamic state buffers.'],
                ['T', 'Topology Broker', 'Synchronizes graph state across the operational board.'],
                ['A', 'Compliance Auditor', 'Writes design.md traces; certifies proofs under load.'],
              ].map(([i, t, b]) => (
                <div key={t} className="feature-item">
                  <div className="ico">{i}</div>
                  <div>
                    <h4>{t}</h4>
                    <p>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass" style={{ padding: 24, minHeight: 320 }}>
            <p className="eyebrow">Active DAG</p>
            <div className="mock-graph" style={{ minHeight: 280, borderRadius: 12, marginTop: 16 }}>
              <div className="node live">Client Auth Stage</div>
              <div className="edge" />
              <div className="node">Relational Graph Router</div>
              <div className="edge" />
              <div className="node">Fixed-Point Core Execution</div>
              <div className="edge" />
              <div className="node">Cryptographic Audit System</div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
