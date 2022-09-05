const express = require('express')
const app = express()
const { ContactsModel } = require('../../../../schemas')

const GetUser = app.get('/get-contact', (req, res) => {
    ContactsModel.findById(req.query._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUser