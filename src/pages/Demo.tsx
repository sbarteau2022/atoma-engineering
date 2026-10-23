import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Demo() {
  return (
    <div className="lab-shell">
      <div className="lab-top">
        <span className="mono" style={{ color: 'var(--paper)' }}>DEMO MODE</span>
        <span className="chip ok"><span className="dot" />Sandbox</span>
        <span className="mono" style={{ marginLeft: 'auto' }}>No account · local session</span>
        <Link to="/lab" className="btn btn-primary" style={{ height: 28, fontSize: 12, padding: '0 12px' }}>
          Open full lab
        </Link>
      </div>
      <div className="lab-body">
        <aside className="lab-side">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Agents</p>
          {['Orchestrator', 'MSL Kernel', 'Topology Broker', 'Compliance Auditor'].map((a, i) => (
            <div key={a} className={`mock-row${i === 0 ? ' active' : ''}`} style={{ marginBottom: 4 }}>
              <span className="dot" style={{ color: i === 0 ? '#3dd68c' : 'var(--fog)' }} />
              {a}
            </div>
          ))}
        </aside>
        <div className="lab-main">
          <motion.div
            className="lab-banner glass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}
          >
            <p className="eyebrow">Interactive demo</p>
            <h2 className="display" style={{ fontSize: 24 }}>Brigade synthesis preview</h2>
            <p style={{ maxWidth: 420, margin: '0 auto' }}>
              Full IDE (ReactFlow · R3F · WebGPU) lands in a later drop. This sandbox shows the
              multi-tier surface: agents, DAG, and witness feed—ready for your CF deploy.
            </p>
            <div className="mock-graph" style={{ minHeight: 160, marginTop: 8, borderRadius: 12, border: '1px solid var(--hairline)' }}>
              <div className="node live">Tokio Runtime</div>
              <div className="edge" />
              <div className="node">Agent Router</div>
              <div className="edge" />
              <div className="node">Audit Log</div>
            </div>
          </motion.div>
        </div>
        <aside className="lab-right">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Witness feed</p>
          <div className="mono" style={{ fontSize: 11, lineHeight: 1.7, color: 'var(--mist)' }}>
            <div>Kernel → Bind WebGPU memory</div>
            <div>Auditor → Validate design.md</div>
            <div>Broker → State graph synchronized</div>
            <div style={{ color: '#3dd68c' }}>Proofs · SUCCESS</div>
          </div>
        </aside>
      </div>
    </div>
  )
}
