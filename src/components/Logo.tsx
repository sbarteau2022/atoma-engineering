export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M20 4 L36 34 H4 Z" stroke="#f7f8f8" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 12 L28 30 H12 Z" fill="#5e6ad2" />
    </svg>
  )
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="nav-brand" style={{ gap: compact ? 8 : 10 }}>
      <LogoMark size={compact ? 18 : 22} />
      <div className="nav-brand-text">
        <strong>ATOMA</strong>
        {!compact && <span>ENGINEERING</span>}
      </div>
    </div>
  )
}
