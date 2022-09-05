const express = require('express')
const app = express()
const { userLikesHubModel, HubModel } = require('../../../../schemas')
const Pitchike = app.post('/add-hub-like', (req, res) => {
    userLikesHubModel.find({LikedById: req.body.LikedById,hubId:req.body.hubId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
                HubModel.findById(req.body.hubId, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        // res.send(result)
                    
                const LIkesAdd = parseInt(result.TotalLikes) + parseInt(1)
                HubModel.findById(req.body.LikedById, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        // res.send(result)
                        const newLike = new userLikesHubModel({
                            hubId: req.body.hubId,
                            LikedById: req.body.LikedById,
                        })
                        newLike.save((error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                res.send(result)
                                // Update User 
                                const updateData = {
                                    $push: {
                                        LikedBy: result.LikedById,
                                    },
                                    TotalLikes: LIkesAdd
                                }
                                const options = {
                                    new: true
                                }
                                HubModel.findByIdAndUpdate(result.hubId, updateData, options, (error, result) => {
                                    if (error) {
                                        res.send(error)
                                    } else {
                                        // res.send(result)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })


        }
    })

})
module.exports = Pitchike