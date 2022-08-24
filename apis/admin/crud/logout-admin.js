const express = require('express')
const app = express()
const { adminModel } = require('../../../schemas')

const LogoutAdmin = app.put('/logout-admin', (req, res) => {
    adminModel.findByIdAndUpdate(req.body._id, { session: null }, { new: true }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                res.send(result)
            } else {
                res.sendStatus(404)
            }
        }
    })
})

module.exports = LogoutAdmin