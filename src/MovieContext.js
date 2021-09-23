import React, {createContext} from 'react'

const MovieContent = createContext()

function movieContext() {
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
        <div>
            
        </div>
    )
}

export default movieContext
