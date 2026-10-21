import { locations } from '../data/gameContent'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function World() {
  return <section id="mundo" className="section world-section"><div className="container">
    <div className="heading-row"><SectionHeading eyebrow="El mundo de Felinaria" title={<>Más allá de<br /><em>tu colonia.</em></>} /><p>Cada territorio tiene su propia historia.<br />El siguiente paso te lleva a descubrirla.</p></div>
    <div className="world-grid">{locations.map((location) => <article key={location.id} className={`location-card location-${location.id}`} data-reveal>
      <div className="location-image"><img src={location.image} alt={location.pending ? `Marcador de ${location.name}; captura del escenario pendiente` : location.name} loading="lazy" width="640" height="360" />{location.pending && <span className="location-pending">ESCENARIO POR REVELAR</span>}</div>
      <div className="location-copy"><span className="eyebrow"><Icon name={location.icon} size={16} /> {location.label}</span><h3>{location.name}</h3><p>{location.description}</p></div>
    </article>)}</div>
    <p className="section-note">Emblemas de presentación provisionales. Las capturas reales de estos escenarios se añadirán próximamente.</p>
  </div></section>
}
