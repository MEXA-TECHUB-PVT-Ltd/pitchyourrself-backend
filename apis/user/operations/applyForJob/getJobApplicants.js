const express = require('express')
const { ApplyJobModel } = require('../../../../schemas')
const app = express()

const GetJobApplicants = app.get('/get-job-applicants', (req, res) => {
    ApplyJobModel.find({hubId: req.query.hubId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetJobApplicants