const express = require('express')
const app = express()
const { WorkedUserModel } = require('../../../../../schemas')

const DeleteUserCollab = app.delete('/delete-WorkedUser', (req, res) => {
    WorkedUserModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteUserCollab