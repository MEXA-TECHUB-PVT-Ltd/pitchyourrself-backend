const express = require('express')
const app = express()
const { HubModel } = require('../../../../schemas')

const GetUser = app.get('/get-hub', (req, res) => {
    HubModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("jobApplicantsId").populate("userId").populate("userSocialLinks")
})
module.exports = GetUser