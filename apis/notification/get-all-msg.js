const express = require('express')
const { Notification } = require('../../schemas')
const app = express()

const GetAllMsg = app.get('/get-all-msgs', (req, res) => {
    Notification.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllMsg