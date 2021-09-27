import React, {useContext } from 'react'
import Todo from './Todo'
import { TodosContext } from './TodoContext'


function TodoList() {
    const [todos, setTodos] = useContext(TodosContext)
    return (
        <>
            {
                todos.map( todo => (
                    <Todo id={todo.todo_id} name={todo.name} />
                ))
            }
        </>
    )
}

export default TodoList
