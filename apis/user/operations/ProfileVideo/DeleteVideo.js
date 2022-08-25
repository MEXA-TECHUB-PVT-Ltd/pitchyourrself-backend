const express = require('express')
const app = express()
const { userProfileVideoModel } = require('../../../../schemas')

const DeleteVideo = app.delete('/delete-profile-Video', (req, res) => {
    userProfileVideoModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteVideo