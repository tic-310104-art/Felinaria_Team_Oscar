export default function SectionHeading({ eyebrow, title, children, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`} data-reveal>
    <span className="eyebrow"><span aria-hidden="true">✦</span> {eyebrow}</span>
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>
}
