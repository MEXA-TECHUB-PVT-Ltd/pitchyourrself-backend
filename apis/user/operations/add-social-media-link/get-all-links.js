const express = require('express')
const app = express()
const { UserProfileLinksModel } = require('../../../../schemas')

const GetAllLinks = app.get('/get-all-social-links', (req, res) => {
    UserProfileLinksModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllLinks