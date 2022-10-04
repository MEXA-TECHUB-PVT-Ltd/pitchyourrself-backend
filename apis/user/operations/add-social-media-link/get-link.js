const express = require('express')
const app = express()
const { UserProfileLinksModel } = require('../../../../schemas')

const GetUser = app.get('/get-social-link', (req, res) => {
    UserProfileLinksModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUser