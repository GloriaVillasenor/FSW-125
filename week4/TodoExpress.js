const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

const Todo = require('./routes/Todo')

const PORT = 3000

app.use(express.json())


