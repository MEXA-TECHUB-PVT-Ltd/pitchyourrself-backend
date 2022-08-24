const express = require('express')
const { HubModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/get-all-posts', (req, res) => {
    HubModel.find({PostType: 'post'}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserRecipients