const express = require('express')
const app = express()
const { Notification } = require('../../schemas')


const UpdateAppointment = app.put('/read-notification', (req, res) => {
    const findReceiver = {
        
        _id: req.body._id,

    }
    const updateData = {
        readStatus: true
    }
    const options = {
        new: true
    }
    Notification.findOneAndUpdate(findReceiver, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateAppointment

   