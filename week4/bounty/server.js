const express = require('express')
const app = express()

app.use(express.json())

app.use('/bounties', require('./routes/bountyRouter'))

const PORT = 9000

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
})
