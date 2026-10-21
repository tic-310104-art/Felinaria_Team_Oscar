import { useEffect, useRef, useState } from 'react'
import { navigation } from '../data/gameContent'
import Icon, { Crest } from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const toggleRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-15% 0px -60% 0px' })
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
    }
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = () => { if (media.matches) setOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    media.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      media.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return <header className="site-header" ref={headerRef}>
    <div className="nav-inner">
      <a href="#inicio" className="brand" aria-label="Felinaria, volver al inicio" onClick={() => setOpen(false)}><Crest /><span>FELINARIA<small>EL ÚLTIMO PRESAGIO</small></span></a>
      <button className="menu-toggle icon-button" ref={toggleRef} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
      <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegación principal">
        {navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
      <span className="nav-status"><span className="status-dot" /> En desarrollo</span>
    </div>
  </header>
}
