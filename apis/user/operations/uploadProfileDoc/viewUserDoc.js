const express = require('express')
const { userProfileDocModel } = require('../../../../schemas')
const app = express()

const GetJobApplicants = app.get('/getUserDoc', (req, res) => {
    userProfileDocModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetJobApplicants