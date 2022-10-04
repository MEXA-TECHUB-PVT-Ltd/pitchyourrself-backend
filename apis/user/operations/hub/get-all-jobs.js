const express = require('express')
const { HubModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/get-all-job-posts', (req, res) => {
    HubModel.find({PostType: 'job'}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("jobApplicantsId")
})
module.exports = GetUserRecipients