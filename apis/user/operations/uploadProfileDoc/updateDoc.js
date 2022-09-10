const express = require('express')
const app = express()
const { userProfileDocModel } = require('../../../../schemas')


const UpdatePassword = app.put('/updateDoc', (req, res) => {
    const findUser = {
        _id: req.body._id
    }
    const updateData = {
        DocType: req.body.DocType,
        DocLink: req.body.DocLink,
    }
    const options = {
        new: true
    }
    userProfileDocModel.findOneAndUpdate(findUser, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdatePassword