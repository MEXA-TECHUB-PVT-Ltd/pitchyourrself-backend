const express = require('express')
const app = express()
const { userModel } = require('../../../schemas')

const GetUser = app.get('/get-user', (req, res) => {
    userModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("UserProfileLinkId")
    .populate("RecommendationsUserId")
    .populate("favouritesId")
    .populate("savedHubsId")
    .populate("userAppliedJobsId")
    .populate("LikesUsersId")
})
module.exports = GetUser