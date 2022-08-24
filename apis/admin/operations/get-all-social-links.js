const express = require('express')
const app = express()
const { adminSocialLinkModel } = require('../../../schemas')

const GetAllLinks = app.get('/get-all-links-admin', (req, res) => {
    adminSocialLinkModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllLinks