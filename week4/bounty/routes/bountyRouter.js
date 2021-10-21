const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    {
        firstName: 'Cad', 
        lastName: 'Bane', 
        living: 'true', 
        bountyAmount: 10, 
        type: 'Duros', 
        _id: uuidv4()
    }
]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const bounty = req.body
        bounty._id = uuidv4()
        bounties.push(bounty)
        res.send(`Added new Bounty: ${bounty.firstName} ${bounty.lastName}`)
    })

bountyRouter.route('/:id')
    .delete((req, res) => {

    })
    .put((req, res) => {
        
    })

module.exports = bountyRouter
