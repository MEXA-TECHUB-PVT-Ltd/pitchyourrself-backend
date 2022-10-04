const express = require('express')
const app = express()
const { UserProfileLinksModel } = require('../../../../schemas')

const UpdateUser = app.put('/update-user-link', (req, res) => {
    const updateData = {
        icon: req.body.icon,
        link:req.body.link,
    }
    const options = {
        new: true
    }
    UserProfileLinksModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateUser