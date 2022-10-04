const express = require('express')
const { Notification } = require('../../schemas')

const app = express()
// Error 
const GetDoctorAppointmentsReq = app.get('/get-to-notification', (req, res) => {
    Notification.find({to: req.query.to }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetDoctorAppointmentsReq