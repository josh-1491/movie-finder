import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
    } catch (error) {
      console.error('Error loading theme:', error)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites') ?? '[]')
      return Array.isArray(storedFavorites) ? storedFavorites : []
    } catch (error) {
      console.error('Error loading favorites:', error)
      return []
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.error('Error saving theme:', error)
    }
  }, [theme])

  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    } catch (error) {
      console.error('Error saving favorites:', error)
    }
  }, [favorites])

  const toggleFavorite = (movie) => {
    setFavorites((currentFavorites) =>
      currentFavorites.some((favorite) => favorite.id === movie.id)
        ? currentFavorites.filter((favorite) => favorite.id !== movie.id)
        : [...currentFavorites, movie]
    )
  }

  return (
    <BrowserRouter>
      <NavBar theme={theme} onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
