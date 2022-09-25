const express = require('express')
const app = express()
const { Notification } = require('../../schemas')

const DeleteMsg = app.delete('/delete-notification', (req, res) => {
    Notification.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteMsg