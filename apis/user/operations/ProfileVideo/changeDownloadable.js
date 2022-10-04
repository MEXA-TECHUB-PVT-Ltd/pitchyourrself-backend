const express = require('express')
const app = express()
const { userProfileVideoModel } = require('../../../../schemas')
const UpdateStatus = app.put('/change-Downloadable-video', (req, res) => {
    // const findUser = {
    //     _id: req.body.doctorId
    // }
    const updateData = {
        Downloadable:req.body.Downloadable,
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