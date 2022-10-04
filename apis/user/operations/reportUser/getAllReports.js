const express = require('express')
const app = express()
const { reportModel } = require('../../../../schemas')

const GetAllReports = app.get('/get-all-reports', (req, res) => {
    reportModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("userProfileId")
    .populate("userPostId")
    .populate("reportedById")
    
    
})
module.exports = GetAllReports