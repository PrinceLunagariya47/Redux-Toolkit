import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../todo/todoSlice";


const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center">
            <ul className='list-group'>
                {
                    todos.map((item, i) => {
                        return <>
                            <li className='list-group-item d-flex justify-content-between'>
                                {item.text}
                                <button className="ms-3 btn btn-primary" onClick={() => dispatch(removeTodo(item.id))}>
                                    Delete
                                </button>
                            </li>
                        </>
                    })
                }
            </ul>
        </div>
    )
}

export default Todos
