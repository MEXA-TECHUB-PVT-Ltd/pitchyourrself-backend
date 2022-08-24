const express = require('express')
const { HubModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/get-all-question-posts', (req, res) => {
    HubModel.find({PostType: 'question'}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserRecipients