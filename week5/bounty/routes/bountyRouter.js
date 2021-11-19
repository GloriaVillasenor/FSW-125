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
        const bountiesId = req.params.id
        const index = bounties.findIndex(bounty => bounty._id === bountiesId)
        bounties.splice(index, 1)
        res.send("successfully deleted!")
    })
    .put((req, res) => {
        const bounty = req.body
        const bountiesId = req.params.id
        const index = bounties.findIndex(bounty => bounty._id === bountiesId)
        const updatedBounty = Object.assign(bounties[index], bounty)
        res.send(`Added new Bounty: ${updatedBounty.firstName} ${updatedBcounty.lastName}`)
    })

module.exports = bountyRouter
