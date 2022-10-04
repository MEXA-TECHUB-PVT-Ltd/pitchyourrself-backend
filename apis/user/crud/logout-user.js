const express = require('express')
const app = express()
const { userModel } = require('../../../schemas')

const LogoutUser = app.put('/logout-user', (req, res) => {
    userModel.findByIdAndUpdate(req.body._id, { session: null }, { new: true }, (error, result) => {
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

module.exports = LogoutUser