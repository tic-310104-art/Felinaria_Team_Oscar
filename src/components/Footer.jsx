import { game, navigation } from '../data/gameContent'
import Icon, { Crest } from './Icon'

export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div><a href="#inicio" className="brand"><Crest /><span>FELINARIA<small>EL ÚLTIMO PRESAGIO</small></span></a><p>Proyecto académico de desarrollo de videojuegos.</p></div><nav aria-label="Navegación del pie de página">{navigation.slice(1).map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav><a href="#inicio" className="back-top" aria-label="Volver al inicio"><Icon name="down" className="rotate" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {game.title}</span><span>{game.credits}</span><span className="footer-signature">Una aventura que empieza contigo. <span>✦</span></span></div></div></footer>
}
