const express = require('express')
const { userLikesHubModel, HubModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/unlike-hub-user', (req, res) => {
    userLikesHubModel.find({ LikedById: req.query.userId, hubId: req.query.hubId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
                const HubId = req.query.hubId;
                const LikesId = result._id;
                // res.send(result)

                HubModel.findById(HubId, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)

                        const LIkesAdd = parseInt(result.TotalLikes) - parseInt(1)
                        const updateData = {
                            $pull: {
                                LikedBy: req.query.userId,
                            },
                            TotalLikes: LIkesAdd
                        }
                        const options = {
                            new: true
                        }
                        HubModel.findByIdAndUpdate(HubId, updateData, options, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                // res.send(result)
                            }
                        })
                        userLikesHubModel.findByIdAndDelete(LikesId, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                            }
                        })
                    }
                })
           

        }
    })


})
module.exports = GetUserRecipients