const express = require('express')
const app = express()
const { userModel } = require('../../../schemas')

const GetAllUsers = app.get('/get-all-user', (req, res) => {
    userModel.find({}, (error, result) => {
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
    .populate("profileVideoId")
    
})
module.exports = GetAllUsers