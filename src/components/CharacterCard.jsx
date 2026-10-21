import Icon from './Icon'

export default function CharacterCard({ character }) {
  return <article className={`character-card character-${character.id}`} data-reveal>
    <div className="character-portrait">
      <img src={character.image} alt={character.pending ? `Retrato pendiente: ${character.name}` : character.name} loading="lazy" width="160" height="190" />
      {character.pending && <Icon className="portrait-symbol" name={character.icon} size={38} />}
    </div>
    <div className="character-info"><span className="eyebrow">{character.role}</span><h3>{character.name}</h3><p>{character.description}</p>{character.pending && <span className="pending-label">Retrato por revelar · imagen pendiente</span>}</div>
  </article>
}
