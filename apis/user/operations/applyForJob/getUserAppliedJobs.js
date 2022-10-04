const express = require('express')
const { ApplyJobModel } = require('../../../../schemas')
const app = express()

const GetJobApplicants = app.get('/get-user-applications', (req, res) => {
    ApplyJobModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("hubId")
})
module.exports = GetJobApplicants