const express = require('express')
const { UserProfileLinksModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserSocialLinks = app.get('/get-user-social-links', (req, res) => {
    UserProfileLinksModel.find({userId: req.query.userId}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserSocialLinks