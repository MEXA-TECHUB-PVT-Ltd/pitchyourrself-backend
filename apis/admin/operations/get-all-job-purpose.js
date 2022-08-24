const express = require('express')
const app = express()
const { adminjobPurposeModel } = require('../../../schemas')

const GetAllUsers = app.get('/get-all-purpose-job', (req, res) => {
    adminjobPurposeModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetAllUsers