const paths = {
  arrow: <><path d="M4 12h15M13 6l6 6-6 6" /></>,
  chevron: <path d="m9 5 7 7-7 7" />,
  down: <path d="M12 4v16m-6-6 6 6 6-6" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20 14A8 8 0 0 1 10 4 8.5 8.5 0 1 0 20 14Z" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z" /></>,
  swords: <><path d="m4 3 2 6 11 11m3-17-2 6L7 20M3 16l5 5m8-5 5 5M4 3l6 2m10-2-6 2" /></>,
  map: <><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Zm6-2v16m6-14v16" /></>,
  branches: <><circle cx="6" cy="4" r="2" /><circle cx="18" cy="4" r="2" /><circle cx="12" cy="20" r="2" /><path d="M6 6v3l6 5 6-5V6m-6 8v4" /></>,
  bag: <><path d="M5 8h14l2 13H3L5 8Z" /><path d="M8 8V6a4 4 0 0 1 8 0v2M9 14h6" /></>,
  message: <path d="M21 4H3v13h5l4 4 4-4h5V4ZM7 9h10M7 13h6" />,
  paw: <><ellipse cx="5" cy="8" rx="2" ry="3" /><ellipse cx="10" cy="5" rx="2" ry="3" /><ellipse cx="16" cy="5" rx="2" ry="3" /><ellipse cx="21" cy="9" rx="2" ry="3" /><path d="M6 18c0-3 4-7 6-7s6 4 6 7-4 2-6 2-6 1-6-2Z" /></>,
  feather: <><path d="M20 3C10 0 4 8 6 16c8 2 16-4 14-13ZM3 21 17 7M7 17l-1-5m5 1 5 1" /></>,
  flame: <path d="M12 2c2 5-3 7 0 10 2-1 3-3 3-5 7 6 6 14-3 14C3 21 1 13 7 7c0 5 2 5 2 5-2-5 3-7 3-10Z" />,
  waves: <path d="M2 6c3-5 7 5 10 0s7 5 10 0M2 12c3-5 7 5 10 0s7 5 10 0M2 18c3-5 7 5 10 0s7 5 10 0" />,
  mountain: <><path d="m2 20 8-16 5 9 3-5 5 12H2Z" /><path d="m7 10 3 3 3-3" /></>,
  castle: <path d="M3 21V4h3v4h3V4h6v4h3V4h3v17H3Zm6 0v-6a3 3 0 0 1 6 0v6" />,
  monitor: <><rect x="3" y="3" width="18" height="13" rx="1" /><path d="M8 21h8m-4-5v5" /></>,
  diamond: <path d="m12 2 8 10-8 10-8-10L12 2Z" />,
}

export default function Icon({ name, size = 22, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.diamond}</svg>
}

export function Crest({ className = '' }) {
  return <svg className={className} width="46" height="46" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M13 28 14 9l13 10h10L50 9l1 19c7 18-3 27-19 29C16 55 6 46 13 28Z" stroke="currentColor" strokeWidth="1.5" /><path d="M41 30a13 13 0 1 1-18-4 12 12 0 0 0 18 4Z" fill="currentColor" /><path d="m33 19 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z" fill="currentColor" /></svg>
}
