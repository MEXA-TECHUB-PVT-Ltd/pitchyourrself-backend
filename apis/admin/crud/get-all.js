const express = require('express')
const app = express()
const { adminModel } = require('../../../schemas')

const GetAllAdmin = app.get('/get-all-admin', (req, res) => {
    adminModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllAdmin