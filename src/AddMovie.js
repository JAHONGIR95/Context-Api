import React, { useState, useContext } from "react"
import { MovieContent } from "./MovieContext"

function AddMovie() {
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [movies, setMovies] = useContext(MovieContent)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateYear = (e) => {
        setYear(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault()

        setMovies(prev => [...prev, { name, year}])
    }
    

    return (
        <div>
            <form onSubmit={addMovie}>
                <input type="text" value={name} onChange={updateName} />
                <input type="text" value={year} onChange={updateYear} />
                <button type="submit">junatish</button>
            </form>
        </div>
    )
}

export default AddMovie
