import { Link } from 'react-router-dom'

export function Lab() {
  return (
    <div className="lab-shell">
      <div className="lab-top">
        <span style={{ color: 'var(--paper)', fontWeight: 560 }}>Atoma</span>
        <span className="mono">engineering-lab</span>
        <span className="chip ok"><span className="dot" />WebGPU</span>
        <span className="chip">Runtime · Ready</span>
        <span className="mono" style={{ marginLeft: 'auto' }}>IDE surface — phase 2</span>
        <Link to="/demo" className="btn btn-ghost" style={{ height: 28, fontSize: 12, padding: '0 12px' }}>
          Demo
        </Link>
      </div>
      <div className="lab-body">
        <aside className="lab-side">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Overview</p>
          {['Agents', 'Graphs', 'Inference', 'Compliance', 'Files'].map((x) => (
            <div key={x} className="mock-row">{x}</div>
          ))}
        </aside>
        <div className="lab-main">
          <div className="lab-banner glass" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', gap: 12 }}>
            <p className="eyebrow">Model Home Workspace</p>
            <h1 className="display" style={{ fontSize: 28 }}>Engineering Lab</h1>
            <p style={{ color: 'var(--fog)', maxWidth: 400, textAlign: 'center' }}>
              Full interactive IDE (ReactFlow agent graphs, R3F, WebGPU substrate) is deferred by
              design. Marketing multi-tier site is live—wire the lab when you're ready.
            </p>
            <Link to="/" className="btn btn-primary">← Back to marketing</Link>
          </div>
        </div>
        <aside className="lab-right">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Status</p>
          <div className="mono" style={{ fontSize: 11, color: 'var(--mist)', lineHeight: 1.8 }}>
            <div>Latency · —</div>
            <div>Tokens · —</div>
            <div>Compliance · PASS</div>
          </div>
        </aside>
      </div>
    </div>
  )
}
