import { features } from '../data/gameContent'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

const statuses = { design: 'En el diseño del juego', development: 'En desarrollo', implemented: 'Implementado' }

export default function Features() {
  return <section className="section features-section" aria-label="Características del juego"><div className="container">
    <SectionHeading eyebrow="La experiencia" title={<>Pequeñas garras.<br /><em>Una gran aventura.</em></>} centered>Acción, exploración y narrativa en un RPG de fantasía 2D con perspectiva top-down.</SectionHeading>
    <div className="features-grid">{features.map((feature) => <article className="feature" key={feature.name} data-reveal><Icon name={feature.icon} size={29} /><h3>{feature.name}</h3><p>{feature.description}</p><span className={`feature-status status-${feature.status}`}>{statuses[feature.status]}</span></article>)}</div>
    <p className="section-note">Características del diseño del videojuego. Su estado de implementación aún no está verificado.</p>
  </div></section>
}
