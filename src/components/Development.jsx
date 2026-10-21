import SectionHeading from './SectionHeading'
import Icon, { Crest } from './Icon'

export default function Development() {
  return <section id="desarrollo" className="section development-section"><div className="container development-panel" data-reveal>
    <div className="development-copy"><span className="development-badge"><span className="status-dot" /> UN MUNDO EN CONSTRUCCIÓN</span><SectionHeading eyebrow="Detrás de la aventura" title={<>El viaje<br /><em>apenas comienza.</em></>} /><p>Felinaria: El Último Presagio es un videojuego independiente en desarrollo, creado como proyecto escolar. Un mundo que toma forma con cada personaje, cada escenario y cada nueva idea.</p><p className="development-note">Gracias por ser parte de estos primeros pasos.</p><a className="text-link" href="#galeria">Explora el arte del proyecto <Icon name="arrow" size={18} /></a></div>
    <div className="development-details"><Crest className="development-crest" /><dl>{[['Motor', 'Unity 2D'], ['Género', 'RPG de fantasía'], ['Plataforma objetivo', 'PC'], ['Estado', 'En desarrollo']].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{label === 'Estado' && <span className="status-dot" />}{value}</dd></div>)}</dl><span className="development-footnote">PROYECTO ACADÉMICO · HECHO CON IMAGINACIÓN</span></div>
  </div></section>
}
