// Contenido editorial e imágenes. Las rutas son relativas a public/.
// Un recurso con pending: true es un marcador, nunca una captura del juego.
export const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'historia', label: 'Historia' },
  { id: 'personajes', label: 'Personajes' },
  { id: 'mundo', label: 'Mundo' },
  { id: 'galeria', label: 'Galería' },
  { id: 'desarrollo', label: 'Desarrollo' },
]

export const game = {
  title: 'Felinaria: El Último Presagio',
  tagline: 'Cada colonia guarda un secreto. Cada decisión marca un destino.',
  description: 'Adéntrate en un mundo de colonias felinas, territorios desconocidos y decisiones que acompañarán tu aventura.',
  hero: '/images/hero/portada.webp',
  heroSmall: '/images/hero/portada-small.webp',
  heroMobile: '/images/hero/portada-mobile.webp',
  credits: 'Equipo Felinaria · Arte, diseño y desarrollo',
}

export const skins = [
  { id: 'crema', name: 'Crema', color: '#d4af80', image: '/images/characters/protagonista-crema.webp', pending: false },
  { id: 'gris', name: 'Gris', color: '#969493', image: '/images/characters/protagonista-gris.webp', pending: false },
  { id: 'oscuro', name: 'Oscuro', color: '#453d39', image: '/images/characters/protagonista-oscuro.webp', pending: false },
  { id: 'blanco', name: 'Blanco', color: '#f1eadd', image: '/images/characters/pendiente.svg', pending: true },
]

export const characters = [
  { id: 'protagonista', name: 'El protagonista', role: 'Tu aventura, tu historia', description: 'Un joven felino aprendiz de la Colonia del Sol. Su camino comienza con mucho por aprender y un mundo por descubrir.', image: skins[0].image },
  { id: 'cuervos', name: 'Señor de los Cuervos', role: 'El maestro', description: 'Un misterioso guía que acompaña al protagonista en sus primeras experiencias y su formación.', image: '/images/characters/pendiente.svg', pending: true, icon: 'feather' },
  { id: 'rosa', name: 'Rosa', role: 'Un encuentro en la frontera', description: 'Una figura importante de la historia, con habilidades de combate y armas especiales. Su encuentro tiene lugar en la Frontera Sol–Oleaje.', image: '/images/characters/pendiente.svg', pending: true, icon: 'swords' },
  { id: 'rastrojo', name: 'Rastrojo', role: 'El antagonista', description: 'Una presencia ligada a los conflictos que atraviesan Felinaria y amenazan el equilibrio de sus colonias.', image: '/images/characters/pendiente.svg', pending: true, icon: 'flame' },
]

export const locations = [
  { id: 'sol', name: 'Colonia del Sol', label: 'Donde todo comienza', description: 'El pueblo inicial. Aquí, el joven aprendiz da sus primeros pasos y comienza su formación.', image: '/images/locations/sol.svg', pending: true, icon: 'sun' },
  { id: 'frontera', name: 'Frontera Sol–Oleaje', label: 'Más allá de lo conocido', description: 'Un territorio de encuentros y peligros, donde aparecen enemigos y se desarrolla el encuentro con Rosa.', image: '/images/locations/frontera.svg', pending: true, icon: 'waves' },
  { id: 'tierras', name: 'Tierras sin Reclamar', label: 'Un equilibrio en peligro', description: 'Una región peligrosa en la que se intensifican los conflictos entre las colonias.', image: '/images/locations/tierras.svg', pending: true, icon: 'mountain' },
  { id: 'cuevas', name: 'Cuevas misteriosas', label: 'Bajo la superficie', description: 'Escenarios subterráneos que forman parte de la exploración de Felinaria.', image: '/images/locations/cuevas.svg', pending: true, icon: 'mountain' },
  { id: 'castillos', name: 'Castillos y fortalezas', label: 'Entre muros de piedra', description: 'Otros rincones del mundo por explorar a lo largo de la aventura.', image: '/images/locations/castillos.svg', pending: true, icon: 'castle' },
]

// No hay evidencia del estado de implementación de sistemas en este proyecto web.
// Valores admitidos: 'design', 'development', 'implemented'. Cambiar solo al verificarlo.
export const features = [
  { icon: 'compass', name: 'Tu propio camino', description: 'Movimiento libre en ocho direcciones.', status: 'design' },
  { icon: 'swords', name: 'Cada combate cuenta', description: 'Combate con armas y enemigos por enfrentar.', status: 'design' },
  { icon: 'message', name: 'Vidas que se cruzan', description: 'Personajes interactivos a lo largo del viaje.', status: 'design' },
  { icon: 'map', name: 'Un mundo por explorar', description: 'Aldeas, fronteras, cuevas y fortalezas.', status: 'design' },
  { icon: 'bag', name: 'Prepárate para partir', description: 'Inventario y equipamiento para la aventura.', status: 'design' },
  { icon: 'branches', name: 'Decide tu historia', description: 'Decisiones morales que pueden afectar el viaje.', status: 'design' },
  { icon: 'paw', name: 'Un héroe a tu manera', description: 'Cuatro apariencias para el protagonista.', status: 'design' },
]

// Añade aquí capturas, sprites, NPCs o enemigos cuando estén disponibles.
// Las categorías de la galería se generan automáticamente.
export const gallery = [
  { id: 'portada', title: 'Un primer vistazo a Felinaria', category: 'Arte de portada', image: game.hero, thumbnail: '/images/gallery/portada.webp', alt: 'Portada de Felinaria con aventureros felinos y un paisaje de fantasía', description: 'Ilustración de portada del proyecto. No es una captura de gameplay.', kind: 'landscape' },
  ...skins.filter((skin) => !skin.pending).map((skin) => ({
    id: skin.id, title: `El protagonista · ${skin.name}`, category: 'Personajes', image: skin.image,
    thumbnail: `/images/gallery/protagonista-${skin.id}.webp`,
    alt: `Ilustración del protagonista de pelaje ${skin.name.toLowerCase()}, con túnica y pañuelo rojo`,
    description: 'Arte del protagonista proporcionado con el proyecto.', kind: 'portrait',
  })),
]
