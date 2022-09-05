const express = require('express')
const app = express()
const { userProfileVideoModel } = require('../../../../schemas')
const UpdateStatus = app.put('/change-hidden-video', (req, res) => {
    // const findUser = {
    //     _id: req.body.doctorId
    // }
    const updateData = {
        hidden:req.body.hidden,
    }
    const options = {
        new: true
    }
    userProfileVideoModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateStatus