const express = require('express')
const app = express()
const { adminModel } = require('../../../schemas')

const UpdateAdmin = app.put('/update-admin', (req, res) => {
    const updateData = {
        username: req.body.username,
        image:req.body.image
    }
    const options = {
        new: true
    }
    adminModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateAdmin