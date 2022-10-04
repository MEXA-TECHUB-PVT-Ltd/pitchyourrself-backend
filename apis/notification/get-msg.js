const express = require('express')
const app = express()
const { Notification } = require('../../schemas')

const GetDoctor = app.get('/get-msg', (req, res) => {
    Notification.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetDoctor