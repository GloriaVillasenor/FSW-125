const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [
    {
        name: 'Study React', 
        description: 'Watch how to videos', 
        completed: 'false', 
        _id: uuidv4()
    }
]

todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const todo = req.body
        todo._id = uuidv4()
        todos.push(todo)
        res.send(`Added new Todo: ${todo.name} ${todo.description}`)
    })

todoRouter.route('/:id')
    .delete((req, res) => {
        const todosId = req.params.id
        const index = todos.findIndex(todo => todo._id === todosId)
        todos.splice(index, 1)
        res.send("successfully deleted!")
    })
    .put((req, res) => {
        const todo = req.body
        const todosId = req.params.id
        const index = todos.findIndex(todo => todo._id === todosId)
        const updatedtodo = Object.assign(todos[index], todo)
        res.send(`Added new(todo: $(todo.name} $(todo.description}`)
    })

module.exports =(todoRouter)
