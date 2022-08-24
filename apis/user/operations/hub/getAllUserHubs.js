const express = require('express')
const { HubModel } = require('../../../../schemas')
const app = express()

const GetAllUserHubs = app.get('/get-all-user-hubs', (req, res) => {
    HubModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUserHubs