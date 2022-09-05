const express = require('express')
const app = express()
const { RecommentdationsPitchModel, userModel ,HubModel} = require('../../../../../schemas')
const CommentPitch = app.post('/create-pitch-comment', (req, res) => {
    HubModel.findById(req.body.hubId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            userModel.findById(req.body.CommenterId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const UserName = result.name;
                    const UserImage = result.image;
                    const newCommentPitch = new RecommentdationsPitchModel({
                        hubId: req.body.hubId,
                        CommenterId: req.body.CommenterId,
                        CommenterName: UserName,
                        CommenterImage: UserImage,
                        Comment: req.body.Comment
                    })
                    newCommentPitch.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            // Update User 
                            const updateData = {
                                $push: {
                                    RecommendationsPitchId: result._id,
                                }
                            }
                            const options = {
                                new: true
                            }
                            HubModel.findByIdAndUpdate(result.hubId, updateData, options, (error, result) => {
                            })
                        }
                    })
                }
            })

        }
    })

})
module.exports = CommentPitch