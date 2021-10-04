const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    {name: 'John Doe', age: 30},
    {name: 'Jane Doe', age: 25}
]

app.get('/users', (req, res) => {
    //res.send('Hello World!')
    res.send(users)
})

const books = [
    {title: 'Christine', author: 'Stephen King'},
    {title: 'Raise The Titanic', author: 'Clive Cussler'}
]

app.get('/books', (req, res) => {
    //res.send('Hello World!')
    res.send(books)
})

const cars = [
    {make: 'Buick', model: 'Skylark'},
    {make: 'Ford', model: 'Escape'}
]

app.get('/cars', (req, res) => {
    //res.send('Hello World!')
    res.send(cars)
})



app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})