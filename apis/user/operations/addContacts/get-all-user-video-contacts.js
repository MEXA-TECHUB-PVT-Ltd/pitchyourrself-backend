const express = require('express')
const { ContactsModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserSocialLinks = app.get('/get-user-video-contacts', (req, res) => {
    ContactsModel.find({videoId: req.query.videoId}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserSocialLinks