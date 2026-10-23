import { useParams, Link } from 'react-router-dom'
import './App.css'

const recetas = [
  {
    id: 1,
    nombre: 'PIZZA',
    tiempo: '1h 30 min',
    dificultad: 'Media',
    imagen: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600',
    categoria: 'Italiana',
    ingredientes: ['Harina 500 gr', 'Sal 10 gr', 'Levadura en polvo 1 sobre', 'Azúcar 3 gr',
    'Aceite de olivo 40 gr', 'Agua 300 ml', 'Salsa de tomate preparada 200 gr', 'Tomates cherry 1 caja',
    'Queso mozzarella rallado 400 gr', 'Hojas de albahaca fresca 1 manojo'],
    pasos: [
      'Mezclar la levadura con el agua y reservar.',
      'En un bol, colocar la harina, la sal y la azúcar, y luego añadir el agua con la mezcla de levadura.',
      'Mezclar y amasar hasta obtener una mezcla homogénea.',
      'Añadir el aceite de oliva y dejar reposar durante 30 minutos.',
      'Realizar pliegues y dejar reposar otros 30 minutos (repetir 4 veces).',
      'Dividir en recipientes, verter un poco de aceite por encima y dejar reposar durante 1 hora y 30 minutos.',
      'Extender la masa, colocar los toppings al gusto y hornear.'
    ]
  },
  {
    id: 2,
    nombre: 'TARTA DE FRUTOS ROJOS',
    tiempo: '1h 30 min',
    dificultad: 'Media',
    imagen: 'https://www.sortirambnens.com/wp-content/uploads/2019/12/pasti%CC%81s-de-fruits-vermells.png',
    categoria: 'Italiana',
    ingredientes: ['200 gr de harina','125 gr de mantequilla fría','100 gr de azúcar','2 yemas',
'Un poco de sal.', '700 gr de frutos rojos: frambuesas, arándanos y moras', 
'1 taza de azúcar', '1 cucharada de limón','4 cucharadas de almidón','2 cucharadas de mantequilla',
'1 huevo batido'],
    pasos: [
'En un bol bien grande mezclamos la harina, las yemas de huevo, la mantequilla, el azúcar y la sal.',
'Una vez esté, le damos forma en un molde redondo apto para el horno y lo dejamos en la nevera durante una hora para que se enfríe la masa.',
'Cuando pase este tiempo, lo metemos en el horno durante unos 5 minutos a 180 °C.',
'Por otro lado, en una cazuela agregamos los frutos rojos, el azúcar y el zumo de limón y lo dejamos a fuego medio hasta que se empiece a calentar. Al cabo de unos 10 minutos retiramos un poco del zumo de los frutos rojos y lo integramos junto con el almidón.',
'Cuando tengamos esta última mezcla, lo agregamos a la cazuela y lo dejamos todo un rato removiendo despacio hasta que espese.',
'Una vez obtenemos la espesura, lo retiramos del fuego y agregamos la mantequilla removiendo un poco. ',
'A continuación vertemos este relleno en el molde cubierto con la masa y volvemos a cubrir con tiras finitas de más masa. La pintamos con un poco de huevo, añadimos azúcar por encima, y lo metemos al horno durante 25 minutos a 180 °C.',
'A tener en cuenta que es mejor dejar que se enfríe cuando ya esté el pastel listo. Servimos con una bola de helado.'
    ]
  }
]

function Receta1() {
  // 2. Atrapamos el ID de la URL
  const { id } = useParams()

  // 3. Buscamos la receta que coincida con ese ID
  const receta = recetas.find(r => r.id === Number(id))

  // 4. Si la receta no existe (por si escriben mal la URL), mostramos un aviso
  if (!receta) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Receta no encontrada 😢</h2>
  }

  // 5. Mostramos la receta encontrada
  return (
    <div className="pagina-scrapbook">
      
      <header className="header-cuaderno">
      </header>

      <main className="hoja-cuaderno">
        
        <div className="receta-scrapbook">
          
          <div className="titulo-con-cinta">
            <span className="cinta-adhesiva"></span>
            <h1>{receta.nombre}</h1>
          </div>

          <div className="contenido-receta">
            
            <div className="foto-polaroid">
              <img src={receta.imagen} alt={receta.nombre} />
            </div>

            <div className="nota-pegada ingredientes">
              <span className="cinta-adhesiva mini"></span>
              <h2>Ingredientes:</h2>
              <ul>
                {receta.ingredientes.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className="nota-pegada preparacion">
              <h2>Preparación:</h2>
              <ol>
                {receta.pasos.map((paso, i) => (
                  <li key={i}>{paso}</li>
                ))}
              </ol>
              <span className="sticker-perro">🐶</span>
              <span className="sticker-tomate">🍅</span>
            </div>
          </div>

          <Link to="/" className="btn-siguiente">
            ⤶ Volver al inicio
          </Link>
        </div>
        
      </main>
    </div>
  )
}

export default Receta1