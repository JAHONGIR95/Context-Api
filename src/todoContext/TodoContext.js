import React, {createContext, useState} from 'react'

export const TodosContext = createContext()

export function TodoContext(props) {

    const [todos, setTodos] = useState([
        {todo_id: 1, name: 'matematika'},
        {todo_id: 2, name: 'enlish'},
        {todo_id: 3, name: 'dasturlash'},
        {todo_id: 4, name: 'logic'},
    ])

    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    )
}
