const express = require('express')
const {HubModel } = require('../../../../schemas')
const app = express()

const GetJobApplicants = app.get('/get-user-posted-jobs', (req, res) => {
    HubModel.find({userId: req.query.userId,PostType:'job' }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("RecommendationsPitchId")
    .populate("jobApplicantsId")
    .populate("userId").populate("userSocialLinks")
})
module.exports = GetJobApplicants