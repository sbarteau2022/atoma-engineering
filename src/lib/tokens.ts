/** Obsidian Glass design tokens — Atoma Engineering */
export const tokens = {
  void: '#08090a',
  carbon: '#0f1011',
  obsidian: '#161718',
  graphite: '#23252a',
  paper: '#f7f8f8',
  mist: '#d0d6e0',
  fog: '#8a8f98',
  ash: '#62666d',
  indigo: '#5e6ad2',
  indigoHover: '#7170ff',
  hairline: 'rgba(255,255,255,0.06)',
  hairlineStrong: 'rgba(255,255,255,0.10)',
} as const

export const navLinks = [
  { to: '/architecture', label: 'Architecture' },
  { to: '/runtime', label: 'Runtime' },
  { to: '/topology', label: 'Topology' },
  { to: '/compliance', label: 'Compliance' },
] as const

export const stackLine = ['Rust', 'Tokio', 'C++', 'WebGPU', 'TS 7.1'] as const
