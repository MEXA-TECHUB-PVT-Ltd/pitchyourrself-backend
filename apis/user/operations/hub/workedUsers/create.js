const express = require('express')
const app = express()
const {WorkedUserModel, HubModel } = require('../../../../../schemas')

const CreateWorkedUser = app.post('/create-workedUser', (req, res) => {
   
    const workedUser = new WorkedUserModel({
        hubId: req.body.hubId,
        userId: req.body.userId,
        userName:req.body.userName
       
    })
    workedUser.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
            const updateData = {
                $push: {
                    Workedusers: result._id,
                },
            }
            const options = {
                new: true
            }
            HubModel.findByIdAndUpdate(result.hubId, updateData, options, (error, result) => {
            })
        }
    })
})
module.exports = CreateWorkedUser