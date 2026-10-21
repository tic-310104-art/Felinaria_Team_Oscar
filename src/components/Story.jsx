import { skins } from '../data/gameContent'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function Story() {
  return <section id="historia" className="section story-section">
    <div className="container story-layout">
      <div className="story-visual" data-reveal>
        <div className="story-orbit" aria-hidden="true"><span>✦</span></div>
        <span className="story-vertical">TODO COMIENZA CON UN PRIMER PASO</span>
        <img src={skins[0].image} alt="El joven protagonista de pelaje crema, con su pañuelo rojo" loading="lazy" width="600" height="800" />
        <div className="art-caption"><span className="small-star">✦</span><div>Un joven aprendiz<small>COLONIA DEL SOL</small></div><span className="art-label">ARTE DEL PERSONAJE</span></div>
      </div>
      <div className="story-copy" data-reveal>
        <SectionHeading eyebrow="La historia" title={<>Un mundo dividido<br />por sus <em>secretos.</em></>} />
        <p>En Felinaria, cada colonia de gatos tiene sus propias tradiciones, su territorio y sus conflictos. El equilibrio entre ellas es tan valioso como frágil.</p>
        <p>Tu viaje comienza en la <strong>Colonia del Sol</strong>. Eres un joven aprendiz y, bajo la orientación del misterioso <strong>Señor de los Cuervos</strong>, aprenderás a combatir y a explorar más allá de lo conocido.</p>
        <p>En el camino encontrarás aliados, enemigos como la <strong>Manada del Colmillo</strong> y decisiones morales que pueden cambiar el desarrollo de tu aventura.</p>
        <div className="story-concepts">
          {[['compass', 'Exploración'], ['swords', 'Combate'], ['branches', 'Decisiones']].map(([icon, label]) => <div key={label}><Icon name={icon} size={25} /><span>{label}</span></div>)}
        </div>
        <a href="#personajes" className="text-link">Conoce a quienes cruzarán tu camino <Icon name="arrow" size={18} /></a>
      </div>
    </div>
  </section>
}
