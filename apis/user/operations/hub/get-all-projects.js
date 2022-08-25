
const express = require('express')
const { HubModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/get-all-project-posts', (req, res) => {
    HubModel.find({PostType: 'project'}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })

})
module.exports = GetUserRecipients