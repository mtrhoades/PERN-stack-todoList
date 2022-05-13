// IMPORTS
import React, { useState } from 'react';


// FUNCTIONAL COMPONENT
const InputTodo = () => {

    // vanilla js section
    const [description, setDescription] = useState('');


    // helper functions
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:3009/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            // console.log(response);
            window.location = '/';
            
        } catch (err) {
            console.error(err.message)
        }
    };


    // jsx section
  return (
      <div>
    <h1 style={{textAlign: 'center', marginTop: '5rem'}}>PERN Stack To-do List Application</h1>
    <form style={{display: 'flex', marginTop: '2.5rem'}} onSubmit={onSubmitForm}>
        <input 
            type='text'
            className='form-control'
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
    </form>
      </div>
  )
}


export default InputTodo;