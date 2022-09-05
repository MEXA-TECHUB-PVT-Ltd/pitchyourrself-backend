const express = require('express')
const app = express()
const { adminModel } = require('../../../schemas')

const DeleteAdmin = app.delete('/delete-admin', (req, res) => {
    adminModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteAdmin