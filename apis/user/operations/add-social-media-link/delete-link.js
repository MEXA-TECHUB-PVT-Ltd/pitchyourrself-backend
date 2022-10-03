const express = require('express')
const app = express()
const { UserProfileLinksModel } = require('../../../../schemas')

const DeleteAdmin = app.delete('/delete-social-link-user', (req, res) => {
    UserProfileLinksModel.find({ userId: req.body.userId, icon: req.body.icon }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            const LinkID = result[0]._id
            UserProfileLinksModel.findByIdAndDelete(LinkID, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })

})
module.exports = DeleteAdmin