import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, taskCompleted } from '../../actions'
import './Todo.scss'


function Todos() {

    const [itemDesc, setItemDesc] = useState('')

    const todoItems = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const setNewItemDesc = (e) => {
        setItemDesc(e.target.value)
    }

    const addItemToList = (e) => {
        e.preventDefault()
        if (itemDesc === '') {
            alert("The field is empty!")
        } else {
            dispatch(addTodo(itemDesc));
            setItemDesc('')
            // setTimeout(() => {
            // }, 100)
        }

    }

    return (
        <div className="todos">
            <form action="">
                <input type="text" onChange={setNewItemDesc} value={itemDesc} />
                <button onClick={addItemToList}>Add Todo</button>
            </form>


            {todoItems.map(item => (
                <h2 key={item.id} className={"todo-item " + (item.isCompleted ? 'completed' : '')}>
                    {item.description}
                    <button onClick={() => dispatch(removeTodo(item.id))}>x</button>
                    <button onClick={() => dispatch(taskCompleted(item.id))}>Done</button>
                </h2>
            ))}

        </div>
    )
}

export default Todos
