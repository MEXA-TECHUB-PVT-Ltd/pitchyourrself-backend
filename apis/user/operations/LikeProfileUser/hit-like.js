const express = require('express')
const app = express()
const { userLikesProfileModel, userModel ,HubModel} = require('../../../../schemas')
const CommentPitch = app.post('/add-profile-like', (req, res) => {
    userModel.findById(req.body.userId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const LIkesAdd  =parseInt(result.TotalLikes) + parseInt(1)
            userModel.findById(req.body.LikedById, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const newLike = new userLikesProfileModel({
                        userId: req.body.userId,
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
                                    LikesUsersId: result._id,
                                },
                                TotalLikes: LIkesAdd
                            }
                            const options = {
                                new: true
                            }
                            userModel.findByIdAndUpdate(result.userId, updateData, options, (error, result) => {
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

})
module.exports = CommentPitch