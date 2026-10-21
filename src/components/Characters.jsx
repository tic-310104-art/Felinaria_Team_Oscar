import { useState } from 'react'
import { characters, skins } from '../data/gameContent'
import CharacterCard from './CharacterCard'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

export default function Characters() {
  const [selected, setSelected] = useState(skins[0])
  const protagonist = characters[0]
  return <section id="personajes" className="section characters-section">
    <div className="container">
      <SectionHeading eyebrow="Los rostros de la aventura" title={<>Ningún destino se escribe <em>a solas.</em></>} centered>Un aprendiz, un maestro y los encuentros que darán forma al viaje.</SectionHeading>
      <div className="characters-layout">
        <article className="protagonist-card" data-reveal>
          <div className="protagonist-top"><span className="eyebrow">El inicio de tu historia</span><Icon name="paw" size={22} /></div>
          <div className="protagonist-art"><div className="character-halo" aria-hidden="true" /><img key={selected.id} src={selected.image} alt={selected.pending ? 'Apariencia blanca: ilustración pendiente' : `Protagonista de pelaje ${selected.name.toLowerCase()}`} loading="lazy" width="600" height="800" /></div>
          <div className="skin-picker"><div className="skin-options" role="group" aria-label="Apariencia del protagonista">{skins.map((skin) => <button key={skin.id} type="button" className={`skin-swatch ${selected.id === skin.id ? 'selected' : ''}`} style={{ '--swatch': skin.color }} aria-label={`Pelaje ${skin.name.toLowerCase()}${skin.pending ? ' (imagen pendiente)' : ''}`} aria-pressed={selected.id === skin.id} onClick={() => setSelected(skin)}><span />{skin.pending && <i aria-hidden="true">·</i>}</button>)}</div><span className="skin-name" aria-live="polite">Pelaje {selected.name.toLowerCase()}{selected.pending && ' · imagen pendiente'}</span></div>
          <div className="protagonist-info"><h3>{protagonist.name}</h3><p>{protagonist.description}</p></div>
        </article>
        <div className="supporting-characters">{characters.slice(1).map((character) => <CharacterCard key={character.id} character={character} />)}</div>
      </div>
      <p className="section-note">Las ilustraciones disponibles muestran al protagonista. Los retratos del resto del elenco están pendientes.</p>
    </div>
  </section>
}
