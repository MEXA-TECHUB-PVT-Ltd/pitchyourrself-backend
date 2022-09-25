const express = require('express')
const app = express()
const {Notification } = require('../../schemas')

const CreateNotification = app.post('/create-msg', (req, res) => {
   
    const notificationMessage = new Notification({
        from: req.body.from,
        to: req.body.to,
        msgContent: req.body.msgContent,
        dateTime: req.body.dateTime,
        readStatus:false
    })
    notificationMessage.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = CreateNotification