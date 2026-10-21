import { game } from '../data/gameContent'
import Icon from './Icon'

export default function Hero() {
  return <section id="inicio" className="hero" aria-label="Felinaria: El Último Presagio">
    <div className="hero-art">
      <picture><source media="(max-width: 900px)" srcSet={game.heroMobile} /><img src={game.hero} srcSet={`${game.heroSmall} 959w, ${game.hero} 1672w`} sizes="100vw" width="1672" height="941" fetchPriority="high" alt="Arte de portada de Felinaria: aventureros felinos entre ruinas, vegetación y castillos" /></picture>
    </div>
    <div className="hero-topline container"><span className="eyebrow"><span className="small-star">✦</span> Una aventura con espíritu felino</span><span className="art-label">ARTE DE PORTADA</span></div>
    <div className="hero-content container">
      <h1 className="hero-title">FELINARIA<span>EL ÚLTIMO PRESAGIO</span></h1>
      <p className="hero-tagline">Cada colonia guarda un secreto.<br /><em>Cada decisión marca un destino.</em></p>
      <p className="hero-description">{game.description}</p>
      <div className="hero-actions"><a className="button button-gold" href="#historia">Explorar la historia <Icon name="arrow" size={18} /></a><a className="button button-outline" href="#galeria"><Icon name="expand" size={17} /> Ver galería</a></div>
    </div>
    <div className="hero-bottom container"><span>AVENTURA · EXPLORACIÓN · FANTASÍA</span><a href="#historia" aria-label="Descubrir la historia de Felinaria"><span>El viaje comienza aquí</span><Icon name="down" size={18} /></a><span><Icon name="monitor" size={16} /> DISEÑADO PARA PC</span></div>
  </section>
}
