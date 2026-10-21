import { useEffect, useRef, useState } from 'react'
import { gallery } from '../data/gameContent'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

function Lightbox({ items, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const dialogRef = useRef(null)
  const item = items[index]
  const move = (direction) => setIndex((current) => (current + direction + items.length) % items.length)

  useEffect(() => {
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  return <dialog ref={dialogRef} className="lightbox" aria-labelledby="lightbox-title" aria-describedby="lightbox-description" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === event.currentTarget) onClose() }} onKeyDown={(event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
    if (event.key === 'Tab') {
      const controls = [...dialogRef.current.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')]
      const first = controls[0]
      const last = controls[controls.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
  }}>
    <div className="lightbox-shell">
      <div className="lightbox-top"><span className="eyebrow">Archivo de Felinaria</span><button autoFocus className="icon-button" onClick={onClose} aria-label="Cerrar galería"><Icon name="close" /></button></div>
      <div className={`lightbox-image ${item.kind}`}><img src={item.image} alt={item.alt} /></div>
      <div className="lightbox-bottom"><div aria-live="polite"><span className="eyebrow">{item.category}</span><h3 id="lightbox-title">{item.title}</h3><p id="lightbox-description">{item.description}</p></div><div className="lightbox-controls"><button className="icon-button" aria-label="Imagen anterior" onClick={() => move(-1)}><Icon name="chevron" className="rotate" /></button><span>{index + 1} / {items.length}</span><button className="icon-button" aria-label="Imagen siguiente" onClick={() => move(1)}><Icon name="chevron" /></button></div></div>
      <span className="lightbox-hint">← → para navegar · Esc para cerrar</span>
    </div>
  </dialog>
}

export default function Gallery() {
  const [category, setCategory] = useState('Todo')
  const [selected, setSelected] = useState(null)
  const categories = ['Todo', ...new Set(gallery.map((item) => item.category))]
  const filtered = gallery.filter((item) => category === 'Todo' || item.category === category)

  return <section id="galeria" className="section gallery-section"><div className="container">
    <div className="heading-row"><SectionHeading eyebrow="El arte de nuestro mundo" title={<>Un vistazo a <em>Felinaria.</em></>} /><span className="gallery-count">EL ARCHIVO VISUAL <span> / {String(gallery.length).padStart(2, '0')}</span></span></div>
    <div className="gallery-toolbar"><div className="gallery-filters" role="group" aria-label="Filtrar galería">{categories.map((name) => <button key={name} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}</div><span>Arte original del proyecto <Icon name="expand" size={15} /></span></div>
    <div className={`gallery-grid ${category !== 'Todo' ? 'is-filtered' : ''}`}>{filtered.map((item, index) => <button className={`gallery-item ${item.kind}`} key={item.id} onClick={() => setSelected(index)} aria-label={`Ampliar: ${item.title}`}>
      <div className="gallery-image"><img src={item.thumbnail || item.image} alt={item.alt} loading="lazy" width={item.kind === 'landscape' ? 960 : 360} height={item.kind === 'landscape' ? 540 : 480} /><span className="gallery-expand"><Icon name="expand" size={19} /></span></div>
      <div className="gallery-caption"><div><span className="eyebrow">{item.category}</span><h3>{item.title}</h3></div><Icon name="arrow" size={18} /></div>
    </button>)}</div>
    <p className="section-note">Una mirada al universo visual en construcción. Las capturas de gameplay se incorporarán cuando estén disponibles.</p>
    {selected !== null && <Lightbox items={filtered} initialIndex={selected} onClose={() => setSelected(null)} />}
  </div></section>
}
