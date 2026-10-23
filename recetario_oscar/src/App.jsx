import { Link } from 'react-router-dom'
import './App.css'

const recetas = [
  {
    id: 1,
    nombre: 'Pizza',
    tiempo: '45 min',
    dificultad: 'Media',
    imagen: 'https://i.pinimg.com/736x/e4/33/09/e43309fa63b61f2f89db97c3b7a2ecf9.jpg',
  },
  {
    id: 2,
    nombre: 'Tarta de Frutos Rojos',
    tiempo: '30 min',
    dificultad: 'Fácil',
    imagen: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
  }
]

function App() {
  return (
    <div className="pagina">
      {/* BARRA SUPERIOR */}
      <header className="header">
        <div className="logo">(｡˃ ᵕ ˂ )⸝ ♨ Recetario!!!</div>
        <nav className="nav"></nav>
      </header>

      {/* BANNER PRINCIPAL */}
      <section className="hero">
         <img 
          src="https://file.garden/arKg2AStrcWSmWTa/aef02f03a30e8ddba93317761e99e645-removebg-preview.png" 
          alt="decoracion" 
          className="esquina-decorativa" 
         />
      
        <div className="hero-texto">
          <h1>Las recetas más ricas!</h1>
          <p>Las mejores recetas para sorprender a tu familia</p>
        </div>
        <img 
          src="https://file.garden/arKg2AStrcWSmWTa/image-removebg-preview.png" 
          alt="Cocina" 
          className="hero-img" 
        />
      </section>

      {/* LISTA DE RECETAS (LAS TARJETAS) */}
      <main className="contenedor">
        <div className="titulo-seccion"></div>

        <div className="grid-recetas">
          {recetas.map(receta => (
            /* LA TARJETA ES EL ENLACE PRINCIPAL */
            <Link to={`/receta/${receta.id}`} key={receta.id} className="tarjeta">
              <div className="tarjeta-imagen">
                <img src={receta.imagen} alt={receta.nombre} />
                <span className="badge">Receta</span> 
              </div>
              <div className="tarjeta-info">
                <h3>{receta.nombre}</h3>
                <p className="detalles">⏱ {receta.tiempo} · 🎯 {receta.dificultad}</p>
                
                {/* EL BOTÓN AHORA ES UN DIV PARA NO ROMPER EL LINK PRINCIPAL */}
                <div className="btn-ver">
                  Ver receta
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="footer"></footer>
    </div>
  )
}

export default App