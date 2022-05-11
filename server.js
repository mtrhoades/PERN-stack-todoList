// IMPORTS & DEPENDENCIES
const express = require('express');
const cors = require('cors');
const pool = require('./db');

// CONFIGURATION
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


// DATABASE



// MIDDLEWARE
app.use(cors());
app.use(express.json()); // uses JSON to retrieve the data for req and res.



// ROOT ROUTE
app.get('/', (req, res) => {
    res.send('Welcome to my To-Do List application bitches!')
});


// CONTROLLER ROUTE
const todosController = require('./controllers/todo_controller');
app.use('/todos', todosController);


// SERVER LISTEN
app.listen(PORT, () => {
    console.log('We out here though on port', PORT)
});