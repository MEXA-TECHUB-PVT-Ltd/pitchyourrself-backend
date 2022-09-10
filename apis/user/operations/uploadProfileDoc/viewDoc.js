const express = require('express')
const app = express()
const { userProfileDocModel } = require('../../../../schemas')


const GetDoc = app.get('/getDoc', (req, res) => {
    userProfileDocModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetDoc