const express = require('express')
const app = express()
const { HelpCenterdModel } = require('../../../../schemas')

const GetAllUsers = app.get('/get-all-queries', (req, res) => {
    HelpCenterdModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers