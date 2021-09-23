import React, {useContext} from 'react'
import { MovieContent } from './MovieContext'
import Movie from './Movie'


function MovieList() {
    const [movies, setMovies] = useContext(MovieContent)
    
    return (
        <div className="app">
            {
                movies.map(movie => (
                    <Movie name={movie.name} year={movie.year} key={movie.id} /> 
                ))
            }
        </div>
    )
}

export default MovieList
