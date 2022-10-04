const express = require('express')
const app = express()
const { ApplyJobModel } = require('../../../../schemas')
const UpdateStatus = app.put('/change-status-job', (req, res) => {
    const updateData = {
        Status:req.body.Status,
    }
    const options = {
        new: true
    }
    ApplyJobModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateStatus