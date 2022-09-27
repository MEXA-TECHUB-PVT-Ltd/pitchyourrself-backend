const express = require('express')
const app = express()
const { reportModel, userModel } = require('../../../../schemas')

const CreateUser = app.post('/create-report', (req, res) => {

    const user = new reportModel({
        userProfileId: req.body.userProfileId,
        userPostId: req.body.userPostId,
        reportReason: req.body.reportReason,
        reportedById: req.body.reportedById,
    })
    user.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = CreateUser