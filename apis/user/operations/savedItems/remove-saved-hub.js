const express = require('express')
const { userLikesHubModel, HubModel,savedHubModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/unsave-hub', (req, res) => {
    savedHubModel.find({ userId: req.query.userId, hubId: req.query.hubId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
                const HubId = req.query.hubId;
                const LikesId = result._id;

                HubModel.findById(HubId, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {

                        const updateData = {
                            $pull: {
                                SavedBy: req.query.userId,
                            },
                        }
                        const options = {
                            new: true
                        }
                        HubModel.findByIdAndUpdate(HubId, updateData, options, (error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                res.send(result)
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