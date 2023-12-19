import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../todo/todoSlice";

const AddTodo = () => {

    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addTodo(inputValue))
        setInputValue("")
    }

    return (
        <div>
            <div className="my-5 row g-3 justify-content-center">
                <div className='col-auto'>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Write here..."
                    />
                </div>
                <div className='col-auto'>
                    <button
                        onClick={handleClick}
                        className="col-auto btn btn-primary"
                    >
                        Add Todo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
