import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Página de Inicio (App)', () => {
  
  // CASO DE PRUEBA 1: Verificar que el título principal se muestre
  it('debe mostrar el título del recetario', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // Busca un texto que contenga "Recetario!!!"
    const titulo = screen.getByText(/Recetario!!!/i)
    
    // Verifica que realmente esté en la pantalla
    expect(titulo).toBeInTheDocument()
  })

  // CASO DE PRUEBA 2: Verificar que las recetas se carguen
  it('debe mostrar la receta de Pizza en la lista', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    // Busca el nombre de la pizza
    const recetaPizza = screen.getByText('Pizza')
    
    // Verifica que la pizza esté en la pantalla
    expect(recetaPizza).toBeInTheDocument()
  })

})