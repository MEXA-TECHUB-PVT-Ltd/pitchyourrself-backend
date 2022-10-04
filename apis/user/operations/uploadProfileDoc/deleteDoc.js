const express = require('express')
const app = express()
const { userProfileDocModel } = require('../../../../schemas')

const DeleteDoc = app.delete('/deleteDoc', (req, res) => {
    userProfileDocModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteDoc