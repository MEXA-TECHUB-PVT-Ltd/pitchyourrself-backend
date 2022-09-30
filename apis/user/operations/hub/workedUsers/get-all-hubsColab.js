const express = require('express')
const { WorkedUserModel, HubModel } = require('../../../../../schemas')
const app = express()

const GetAllcollabHubs = app.get('/get-all-collabHubs', (req, res) => {
    WorkedUserModel.find({hubId: req.query.hubId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllcollabHubs