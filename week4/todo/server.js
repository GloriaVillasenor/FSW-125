const express = require('express')
const app = express()

app.use(express.json())

app.use('/todo', require('./routes/todoRouter'))

const PORT = 3000


app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})
