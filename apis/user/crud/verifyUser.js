const express = require('express')
const app = express()
const { userModel } = require('../../../schemas')
const UpdateStatus = app.put('/verify-user', (req, res) => {
    // const findUser = {
    //     _id: req.body.doctorId
    // }
    const updateData = {
        verifyStatus:true,
    }
    const options = {
        new: true
    }
    userModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateStatus