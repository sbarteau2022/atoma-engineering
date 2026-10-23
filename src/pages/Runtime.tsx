import { CtaBand } from '../components/CtaBand'

export function Runtime() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Runtime</p>
          <h1>The macOS Triton for agents.</h1>
          <p>
            Custom Rust + Tokio + C++ inference engine. Metal and WebGPU acceleration. Deterministic
            generation you can reason about under load.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {[
              ['Rust core', 'Memory-safe runtime host, zero-copy buffers, stable ABI for kernels and workers.'],
              ['Tokio workers', 'Async agent pools with bounded queues, backpressure, and live utilization telemetry.'],
              ['C++ kernels', 'Hot paths for matmul, vector ops, and custom inference primitives—TFLOPS where it counts.'],
              ['WebGPU / Metal', 'Local acceleration path. No cloud round-trip required for the engineering lab.'],
              ['TS 7.1 edge', 'Type-safe bindings for agent graphs, tools, and product UI without stalling the runtime.'],
              ['Audit stream', 'Every inference step can land in the deterministic ledger for compliance and debug.'],
            ].map(([t, b], i) => (
              <article key={t} className="card">
                <div className="idx">{String(i + 1).padStart(2, '0')}</div>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
