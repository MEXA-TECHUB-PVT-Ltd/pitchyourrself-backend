const express = require('express')
const app = express()
const { favouriteUsersProfileModel } = require('../../../../schemas')

const DeleteProduct = app.delete('/unfav-profile', (req, res) => {
    favouriteUsersProfileModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteProduct