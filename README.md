# Felinaria: El Último Presagio

Web promocional en español para el RPG de fantasía de Felinaria. Desarrollada sobre la configuración existente de **React 19 + Vite 8**, en JavaScript, con CSS y SVG propios. No se añadieron dependencias de producción.

## Ejecutar

Requiere una versión de Node compatible con Vite 8 (Node 22.12+ o una versión posterior compatible; verificado con Node 24).

```sh
npm install
npm run dev
```

Abre la dirección que indique Vite, normalmente **http://localhost:5173**. Si `node_modules` ya está instalado, basta con `npm run dev`.

```sh
npm run build     # Genera dist/
npm run preview   # Previsualiza la compilación
npm run lint      # Comprueba JavaScript y React
```

## Organización

```text
src/
  components/         Navegación, hero, historia, personajes, mundo,
                      características, galería, desarrollo y footer
  data/gameContent.js Contenido, imágenes, créditos y estados editables
  styles/globals.css  Paleta, tipografía, espaciado, responsive y movimiento
  App.jsx
  main.jsx
public/
  imgs/               PNG originales proporcionados, sin modificar
  images/
    hero/             Portada WebP en dos tamaños y recorte móvil
    characters/       Ilustraciones WebP y marcador de retrato pendiente
    locations/        Emblemas SVG provisionales, no capturas de gameplay
    gallery/          Miniaturas WebP
scripts/
  prepare_assets.py   Regeneración opcional de imágenes optimizadas
  browser_check.py    Comprobación funcional opcional con Playwright
```

## Imágenes reales encontradas

| Original en `public/imgs` | Uso en la web |
| --- | --- |
| `portada.png` | Hero cinematográfico y galería; identificado como arte de portada |
| `prota2.png` | Protagonista crema: historia, selector y galería |
| `prota3.png` | Protagonista oscuro: selector y galería |
| `prota4.png` | Protagonista gris: selector y galería |

La correspondencia de colores se realizó por inspección visual; puede cambiarse en `gameContent.js`. La portada contiene el título integrado: en escritorio se utiliza esa composición con un `h1` accesible. En móvil y tablet se utiliza un recorte de la parte izquierda de la misma portada y el título HTML es visible, evitando duplicar o cortar el logotipo.

Las copias WebP conservan la transparencia y las proporciones. Los originales no se alteran. El navegador carga versiones reducidas para las miniaturas y carga diferida fuera del hero.

### Recursos pendientes

- Ilustración del protagonista blanco.
- Retratos confirmados del Señor de los Cuervos, Rosa y Rastrojo.
- Capturas de Colonia del Sol, Frontera Sol–Oleaje y Tierras sin Reclamar.
- Capturas de cuevas, castillos y fortalezas.
- Sprites, NPCs, enemigos (incluida la Manada del Colmillo) y capturas de Unity que se quieran mostrar.

Los recursos ausentes tienen **marcadores locales claramente identificados**. Los emblemas de lugares son gráficos de presentación, no representaciones del escenario. No se presentan las ilustraciones como gameplay ni se asignan personajes no identificados de la portada a los NPCs.

## Cambiar contenido y añadir imágenes

Edita **`src/data/gameContent.js`**:

- `game`: descripción, portada y créditos del equipo.
- `skins`: las cuatro apariencias; al añadir el pelaje blanco cambia `image` y `pending: false`.
- `characters`: nombres, roles, descripciones y retratos; cambia `pending: false` al añadir una imagen real.
- `locations`: rutas, textos y estado de las imágenes de escenarios.
- `features`: características y estado `design`, `development` o `implemented`. El estado actual es `design`, porque la implementación no se puede verificar desde el proyecto web. Confirma el estado con el equipo de Unity antes de cambiarlo.
- `gallery`: añade tantos recursos como necesites. Las categorías se generan a partir de los datos.

Ejemplo de una entrada nueva, **después de colocar la captura real** en `public/images/gallery/`:

```js
{
  id: 'colonia-sol',
  title: 'Colonia del Sol',
  category: 'Escenarios',
  image: '/images/gallery/colonia-sol.webp',
  thumbnail: '/images/gallery/colonia-sol-mini.webp', // Opcional
  alt: 'Descripción de lo que muestra realmente la captura',
  description: 'Captura del proyecto en Unity 2D.',
  kind: 'landscape', // Usa 'portrait' para retratos y sprites verticales
}
```

El lightbox muestra la imagen completa sin recortarla. Admite flechas, botones, Escape y cierre exterior; mantiene el foco dentro del diálogo y lo devuelve al botón de apertura.

## Diseño y accesibilidad

- Navegación sticky, menú móvil con Escape y cierre exterior, enlaces entre secciones.
- Selector funcional de las cuatro apariencias; la blanca muestra su marcador pendiente.
- Galería filtrable con diálogo nativo accesible.
- Entrada gradual mediante Intersection Observer; respeto de `prefers-reduced-motion`.
- Tipografía Cinzel y DM Sans desde Google Fonts, con alternativas locales serif y sans-serif si no hay conexión.
- Metadatos en `index.html`, favicon propio y año automático.

Antes de publicar, ajusta las URLs de Open Graph a la dirección absoluta de tu dominio y añade una URL canónica cuando exista. Los créditos se editan en `game.credits`. No hay una fecha de lanzamiento ni una descarga anunciadas.

## Herramientas opcionales de verificación

La web no necesita Python. Solo los scripts auxiliares lo utilizan.

Para regenerar las copias de los cuatro originales:

```sh
python -m pip install Pillow
python scripts/prepare_assets.py
```

Para repetir la comprobación de navegador, con Vite ya ejecutándose en el puerto 5173:

```sh
python -m pip install playwright
python -m playwright install chromium
python scripts/browser_check.py
```

El script verifica filtros, navegación del lightbox, restauración y confinamiento del foco, selector, menú móvil, imágenes, errores de JavaScript y ausencia de desbordamiento a 1440, 1024, 768, 390 y 320 px. Ajusta la constante `OUTPUT` si ejecutas las capturas en otro equipo.
