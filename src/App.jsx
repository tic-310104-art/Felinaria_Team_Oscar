import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Characters from './components/Characters'
import World from './components/World'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Development from './components/Development'
import Footer from './components/Footer'
import './styles/globals.css'

export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      element.classList.add('will-reveal')
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Story />
        <Characters />
        <World />
        <Features />
        <Gallery />
        <Development />
      </main>
      <Footer />
    </>
  )
}
