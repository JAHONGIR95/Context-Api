import React from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import { MovieProvider } from './MovieContext'

function App() {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <MovieList />
      </MovieProvider>
    </div>
  )
}

export default App
