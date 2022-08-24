const express = require('express')
const app = express()
const { adminModel } = require('../../../schemas')

const GetAdmin = app.get('/get-admin', (req, res) => {
    adminModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAdmin