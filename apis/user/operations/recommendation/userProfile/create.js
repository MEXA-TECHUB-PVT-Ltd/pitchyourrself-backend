const express = require('express')
const app = express()
const { RecommentdationsUserModel, userModel } = require('../../../../../schemas')
const CommentProfileUser = app.post('/create-profile-comment', (req, res) => {
    userModel.findById(req.body.userId, (error, result) => {
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
                    const newCommentProfile = new RecommentdationsUserModel({
                        userId: req.body.userId,
                        CommenterId: req.body.CommenterId,
                        CommenterName: UserName,
                        CommenterImage: UserImage,
                        Comment: req.body.Comment
                    })
                    newCommentProfile.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            // Update User 
                            const updateData = {
                                $push: {
                                    RecommendationsUserId: result._id,
                                }
                            }
                            const options = {
                                new: true
                            }
                            userModel.findByIdAndUpdate(result.userId, updateData, options, (error, result) => {
                            })
                        }
                    })
                }
            })

        }
    })

})
module.exports = CommentProfileUser