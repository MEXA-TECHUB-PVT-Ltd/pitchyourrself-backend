const express = require('express')
const app = express()
const { UserProfileLinksModel } = require('../../../../schemas')

const DeleteAdmin = app.delete('/delete-social-link-user', (req, res) => {
    UserProfileLinksModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteAdmin