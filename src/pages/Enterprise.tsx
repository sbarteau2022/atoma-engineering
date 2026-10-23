import { CtaBand } from '../components/CtaBand'

export function Enterprise() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">Enterprise</p>
          <h1>Enterprise grade. Built for one.</h1>
          <p>
            Same runtime and compliance envelope whether you're a solo founder or a regulated
            team adopting Atoma as the agent engineering standard.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container two-col">
          <div className="feature-list">
            {[
              ['S', 'Security review pack', 'Architecture diagrams, data flow, and threat model for your GRC team.'],
              ['D', 'Deployment options', 'Local lab, private network, or hardened workstation images.'],
              ['P', 'Priority runtime support', 'Direct channel for kernel and Tokio path issues.'],
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
          <div className="card">
            <div className="idx">CONTACT</div>
            <h3>Talk to Atoma</h3>
            <p style={{ marginBottom: 16 }}>
              Reach Stewart for enterprise pilots and compliance walkthroughs.
            </p>
            <a className="btn btn-primary" style={{ width: '100%' }} href="mailto:sbarteau2022@gmail.com">
              sbarteau2022@gmail.com
            </a>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
