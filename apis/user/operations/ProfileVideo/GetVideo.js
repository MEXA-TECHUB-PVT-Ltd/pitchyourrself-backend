const express = require('express')
const app = express()
const { userProfileVideoModel } = require('../../../../schemas')

const GetUser = app.get('/get-profile-video', (req, res) => {
    userProfileVideoModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    }).populate("AddContactId")
})
module.exports = GetUser