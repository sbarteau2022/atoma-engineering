import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CtaBand } from '../components/CtaBand'
import { stackLine } from '../lib/tokens'

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}

const cards = [
  {
    idx: '01  RUNTIME',
    title: 'Rust · Tokio · C++ inference',
    body: 'Custom runtime—the macOS Triton for agents. Deterministic token generation, zero-copy WebGPU path, TS bindings at the edge.',
    chips: ['RUNNING', 'Low-latency', 'Local-first'],
  },
  {
    idx: '02  COMPLIANCE',
    title: 'Enterprise for solos',
    body: 'SOC 2 · GDPR · SBOM · local data residency. Policy and audit without a platform team or seat tax.',
    chips: ['SOC 2', 'GDPR', 'SBOM'],
  },
  {
    idx: '03  WORKSPACE',
    title: 'Agentic Engineering Lab',
    body: 'Brigade orchestration, real-time DAGs, and live substrate—agents as first-class UI for builders who ship alone.',
    chips: ['Brigade', 'DAG', 'WebGPU'],
  },
]

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div className="hero-copy" {...fade}>
            <div className="hero-status">
              <span className="pulse" />
              <span className="mono" style={{ color: 'var(--mist)', fontSize: 11 }}>
                ATOMA CORE v0.9.4 — LOCAL METAL / WEBGPU ACCELERATION ACTIVE
              </span>
            </div>
            <h1>
              Enterprise-Grade Engineering
              <br />& Autonomy for Solo Developers.
            </h1>
            <p className="lede">
              The macOS Triton equivalent. Deterministic token generation, continuous graph
              orchestration, and zero-leak compliance—engineered in Rust, C++, and WebGPU for
              developers who build alone at industrial scale.
            </p>
            <div className="hero-ctas">
              <Link to="/demo" className="btn btn-primary">
                [ Launch Interactive IDE Demo ]
              </Link>
              <Link to="/docs" className="btn btn-ghost">
                [ Download All-In-One App ]
              </Link>
            </div>
            <div className="hero-stack">
              {stackLine.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-visual-bar">
              <div className="traffic">
                <i /><i /><i />
              </div>
              <span className="title">atoma-pipeline · live</span>
              <span className="mono" style={{ marginLeft: 'auto', fontSize: 10 }}>
                WebGPU · Runtime Ready
              </span>
            </div>
            <div className="hero-mock">
              <div className="mock-pane">
                <h5>Brigade</h5>
                <div className="mock-row active"><span className="dot" style={{ color: '#3dd68c' }} /> Orchestrator</div>
                <div className="mock-row"><span className="dot" style={{ color: 'var(--indigo)' }} /> MSL Kernel</div>
                <div className="mock-row"><span className="dot" style={{ color: 'var(--fog)' }} /> Topology Broker</div>
                <div className="mock-row"><span className="dot" style={{ color: 'var(--fog)' }} /> Compliance Auditor</div>
                <h5 style={{ marginTop: 18 }}>Files</h5>
                <div className="mock-row mono" style={{ fontSize: 11 }}>src/tokio_kernel.rs</div>
                <div className="mock-row mono" style={{ fontSize: 11 }}>compute_graph.mlir</div>
                <div className="mock-row mono" style={{ fontSize: 11 }}>design.md ✓</div>
              </div>
              <div className="mock-pane mock-graph">
                <div className="node">Tokio Runtime</div>
                <div className="edge" />
                <div className="node live">Agent Execution Router</div>
                <div className="edge" />
                <div className="node">Deterministic Audit Log</div>
              </div>
              <div className="mock-pane">
                <h5>Live telemetry</h5>
                <div className="mock-row mono" style={{ fontSize: 11 }}>Active agents · 4</div>
                <div className="mock-row mono" style={{ fontSize: 11 }}>GPU · Metal / WebGPU</div>
                <div className="mock-row mono" style={{ fontSize: 11 }}>Latency p50 · 12ms</div>
                <div className="mock-row mono" style={{ fontSize: 11 }}>Compliance · PASS</div>
                <h5 style={{ marginTop: 18 }}>Session</h5>
                <p style={{ fontSize: 12, color: 'var(--fog)', lineHeight: 1.5 }}>
                  Brigade synthesizing worktree. All specialized units mobilized.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container">
        <div className="stack-strip">
          {['Rust', 'Tokio', 'C++', 'WebGPU', 'React 19', 'Metal', 'TS 7.1'].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>

      <section className="section" id="transitions">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">From prototype to production</p>
            <h2>One environment. Three transitions.</h2>
            <p>
              Runtime, compliance, and workspace—unified so solo developers ship with enterprise posture.
            </p>
          </div>
          <div className="card-grid">
            {cards.map((c) => (
              <article key={c.idx} className="card">
                <div className="idx">{c.idx}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="meta">
                  {c.chips.map((ch) => (
                    <span key={ch} className={`chip${ch === 'RUNNING' || ch === 'SOC 2' ? ' ok' : ''}`}>
                      {ch === 'RUNNING' && <span className="dot" />}
                      {ch}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Product thesis</p>
            <h2 className="display" style={{ fontSize: 32, margin: '12px 0 14px' }}>
              Engineering without the enterprise tax.
            </h2>
            <p style={{ color: 'var(--fog)', marginBottom: 20 }}>
              Most agent stacks assume a platform team. Atoma assumes you. Local-first lab, custom
              inference runtime, compliance primitives, and tooling that scales from a laptop to
              production.
            </p>
            <div className="feature-list">
              {[
                ['R', 'Runtime you own', 'Rust + Tokio + C++ kernels—not a black-box API.'],
                ['C', 'Compliance as product', 'Residency, SBOM, audit trails built in.'],
                ['B', 'Brigade-native workspace', 'Agents, DAGs, and code in one flow.'],
              ].map(([ico, t, b]) => (
                <div key={t} className="feature-item">
                  <div className="ico">{ico}</div>
                  <div>
                    <h4>{t}</h4>
                    <p>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass" style={{ padding: 24 }}>
            <p className="eyebrow">The macOS Triton for agents</p>
            <h3 className="display" style={{ fontSize: 22, margin: '12px 0 12px' }}>
              Purpose-built inference engine & runtime
            </h3>
            <p style={{ color: 'var(--fog)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
              Rust at the core. TypeScript at the edge. C++ where kernels matter. Fast enough for
              solo iteration. Serious enough for production and adversarial pressure tests.
            </p>
            <ul style={{ listStyle: 'none', fontSize: 13, color: 'var(--mist)' }}>
              {[
                'Deterministic token generation',
                'Continuous graph orchestration',
                'Zero-leak compliance envelope',
                'Metal / WebGPU acceleration',
              ].map((x) => (
                <li key={x} style={{ padding: '8px 0', borderBottom: '1px solid var(--hairline)' }}>
                  <span style={{ color: 'var(--indigo)', marginRight: 8 }}>▹</span>
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/runtime" className="btn btn-ghost" style={{ marginTop: 20, width: '100%' }}>
              Explore runtime →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
