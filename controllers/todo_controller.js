// IMPORTS
const express = require('express');
const pool = require('../db');


// VARIABLES
const todos = express.Router();


// ROUTES

// create a todos route
todos.post('/', async (req, res) => { // async provides an await to wait til the function completes before it continues.
    try {
        //console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);

    } catch (err) {
        res.status(404).send(err.message)
    }
});


// get all todos routes
todos.get('/', async (req, res) => {
    try {
        const allToDos = await pool.query(
            "SELECT * FROM todo"
        );

        res.json(allToDos.rows);

    } catch (err) {
        res.status(404).send(err.message)
    }
});


// get a single todos route
todos.get('/:id', async (req, res) => {
    try {
        // console.log(req.params)
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json(todo.rows[0]);

    } catch (err) {
        res.status(404).send(err.message)
    }
});


// update a todos route
todos.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
            );

            res.json('Todo was updated!');

    } catch (err) {
        res.status(404).send(err.message)
    }
});


// delete a todos route
todos.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json("Todo was deleted!")
        
    } catch (err) {
        res.status(404).send(err.message)
    }
});


module.exports = todos;