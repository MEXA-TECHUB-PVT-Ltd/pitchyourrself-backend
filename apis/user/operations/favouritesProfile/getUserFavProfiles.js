const express = require('express')
const { favouriteUsersProfileModel } = require('../../../../schemas')
const app = express()

const GetUserWishlists = app.get('/get-all-user-fav-profile', (req, res) => {
    favouriteUsersProfileModel.find({userId: req.query.userId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = GetUserWishlists