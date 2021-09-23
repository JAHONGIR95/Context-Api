import React, { useState, createContext} from 'react'

export const MovieContent = createContext()

export function MovieProvider(props) {

    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'Ertugrul',
            year: 2014
        },
        {
            id: 2,
            name: 'Osman',
            year: 2019
        },
        {
            id: 3,
            name: 'Jaloliddin',
            year: 2021
        },
        {
            id: 4,
            name: 'Ichkarida',
            year: 2017
        },
    ])
    return (
        <MovieContent.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContent.Provider>
    )
}

