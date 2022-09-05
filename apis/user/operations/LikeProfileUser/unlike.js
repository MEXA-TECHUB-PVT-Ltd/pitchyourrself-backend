const express = require('express')
const { userLikesProfileModel, userModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/unlike-profile-user', (req, res) => {
    // userLikesProfileModel.findByIdAndDelete(req.query._id, (error, result) => {
    //     if (error) {
    //         res.send(error)
    //     } else {
    // res.send(result)
    userLikesProfileModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            const UserId = result.userId;
    // res.send(result)

            userModel.findById(UserId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    const LIkesAdd = parseInt(result.TotalLikes) - parseInt(1)
                    const updateData = {
                        $pull: {
                            LikesUsersId: req.query._id,
                        },
                        TotalLikes: LIkesAdd
                    }
                    const options = {
                        new: true
                    }
                    userModel.findByIdAndUpdate(UserId, updateData, options, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                        }
                    })
                    userLikesProfileModel.findByIdAndDelete(req.query._id, (error, result) => {
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