const express = require('express')
const app = express()
const { savedHubModel, userModel ,HubModel} = require('../../../../schemas')
const CommentPitch = app.post('/add-saved-item', (req, res) => {
    HubModel.findById(req.body.hubId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            userModel.findById(req.body.userId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const newCommentPitch = new savedHubModel({
                        hubId: req.body.hubId,
                       userId:req.body.userId
                    })
                    newCommentPitch.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            // Update User 
                            const updateData = {
                                $push: {
                                    savedHubsId: result._id,
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
module.exports = CommentPitch