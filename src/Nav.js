import React, { useContext } from "react"
import AddMovie from "./AddMovie"
import { MovieContent } from "./MovieContext"
import "./nav.css"

function Nav() {
    const [movies, setMovies] = useContext(MovieContent)

    return (
        <nav>
            <AddMovie />
            <ul>
                <li>Navbar</li>
                <li>Movie number: {movies.length}</li>
            </ul>
        </nav>
    )
}

export default Nav
