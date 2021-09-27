import React from 'react'
import MovieList from './MovieList'
import Nav from './Nav'
import { MovieProvider } from './MovieContext'
import { TodoContext } from './todoContext/TodoContext'
import TodoList from './todoContext/TodoList'

function App() {
  return (
    <div>
      <MovieProvider>
        <Nav />
        <MovieList />
      </MovieProvider>
      <TodoContext>
        <TodoList />
      </TodoContext>
    </div>
  )
}

export default App
