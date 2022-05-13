// IMPORTS
import React, { useEffect, useState } from 'react';

// COMPONENTS IMPORTS
import EditTodo from './EditTodo';

// FUNCTIONAL COMPONENT
const ListTodos = () => {
    // VANILLA JS SECTION

    const [todos, setTodos] = useState([]);


    // helper functions:

        // fetching data from psql
    const getTodos = async () => {
        try {
           const response = await fetch('http://localhost:3009/todos');
           const jsonData = await response.json();
           
        //    console.log(jsonData);
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message)
        }
    };


        // useEffect section
    useEffect(() => {
        getTodos();
    }, []);

    // console.log(todos);


        // delete button onClick function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3009/todos/${id}`, {
                method: 'DELETE'
            });

            // console.log(deleteTodo);

            setTodos(todos.filter(todo => todo.todo_id !== id)); // .filter sets a condition where if the todos fit that condition of (todo.todo.id DOES NOT EQUAL the id of the one deleted) than return the list of todos (that were not deleted yet).

        } catch (err) {
            console.error(err.message)
        }
    }



    // JSX SECTION
  return (
    <div style ={{marginTop: '4rem', textAlign: 'center'}}>
        <h1>To-Do List</h1>
        <table class="table" style ={{marginTop: '2.5rem'}}>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <th scope="col">{todo.todo_id}</th>
                        <td>{todo.description}</td>
                        <td>
                            <EditTodo todo={todo}/>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteTodo(todo.todo_id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}


export default ListTodos;