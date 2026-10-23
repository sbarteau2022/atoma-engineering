import { CtaBand } from '../components/CtaBand'

export function Compliance() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Compliance</p>
          <h1>Enterprise posture. Solo seat count.</h1>
          <p>
            Adversarial pressure tests, deterministic audit logs, and zero-leak envelopes—so
            compliance is a product surface, not a PDF afterthought.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {[
              ['SOC 2 ready', 'Controls mapped into runtime and workspace flows—not bolt-on questionnaires alone.'],
              ['GDPR & residency', 'Local-first by default. Data stays on your machine until you choose otherwise.'],
              ['SBOM export', 'Software bill of materials for the runtime and agent toolchain, exportable on demand.'],
              ['Adversarial tests', 'Byzantine agent injection, fault routing, memory stress—proofs certified under load.'],
              ['Intrusion shielding', 'Deterministic kernels, zero-drift memory checks, compliance nodes on the DAG.'],
              ['Witness feed', 'Brigade comms stream every isolation, remount, and reroute for human audit.'],
            ].map((c, i) => (
              <article key={c[0]} className="card">
                <div className="idx">{String(i + 1).padStart(2, '0')}</div>
                <h3>{c[0]}</h3>
                <p>{c[1]}</p>
                <div className="meta">
                  <span className="chip ok"><span className="dot" />PASS</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
