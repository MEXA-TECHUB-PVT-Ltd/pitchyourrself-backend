const express = require('express')
const app = express()
const { userModel } = require('../../../schemas')

const DeleteAdmin = app.delete('/delete-user', (req, res) => {
    userModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteAdmin