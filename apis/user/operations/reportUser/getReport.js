const express = require('express')
const app = express()
const { reportModel } = require('../../../../schemas')

const Getreport = app.get('/get-report', (req, res) => {
    reportModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("userProfileId")
    .populate("userPostId")
    .populate("reportedById")
})
module.exports = Getreport