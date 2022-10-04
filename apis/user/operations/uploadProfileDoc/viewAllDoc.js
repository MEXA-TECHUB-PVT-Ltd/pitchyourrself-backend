const express = require('express')
const app = express()
const { userProfileDocModel } = require('../../../../schemas')

const GetAllDoc = app.get('/getAllDoc', (req, res) => {
    userProfileDocModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllDoc