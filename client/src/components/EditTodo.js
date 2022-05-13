// IMPORTS
import React, { useState } from 'react';


// FUNCTIONAL COMPONENT
const EditTodo = ({ todo }) => {
    // console.log(todo);

    // VANILLA JS SECTION
    const [description, setDescription] = useState(todo.description);

        // helper functions
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:3009/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            // console.log(response);

            window.location = '/';
            
        } catch (err) {
            console.error(err.message);
        }
    }

    // JSX SECTION
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
        </button>

        {/* <!-- Modal --> */}
        <div class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit To-Do</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input
                            type='text'
                            className="form-control"
                            value={description}
                            onChange={e => setDescription(e.target.value)}>
                        </input>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-warning"
                            data-dismiss="modal"
                            onClick={e => updateDescription(e)}
                        >
                                Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default EditTodo;