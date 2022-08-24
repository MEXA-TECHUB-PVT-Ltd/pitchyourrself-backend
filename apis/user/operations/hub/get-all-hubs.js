const express = require('express')
const app = express()
const { HubModel } = require('../../../../schemas')

const GetAllUsers = app.get('/get-all-hubs', (req, res) => {
    HubModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("RecommendationsPitchId").populate("jobApplicantsId").populate("userId")
})
module.exports = GetAllUsers