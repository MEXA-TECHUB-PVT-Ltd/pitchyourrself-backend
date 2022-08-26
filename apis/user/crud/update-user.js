const express = require('express')
const app = express()
const { userModel } = require('../../../schemas')
var findHashtags = require('find-hashtags');

const UpdateUser = app.put('/update-user', (req, res) => {
    const ProfileHashtag= findHashtags(req.body.ProfileHashtag)
    console.log(ProfileHashtag)
    const updateData = {
        name: req.body.name,
        image:req.body.image,
        profession:req.body.profession,
        bio:req.body.bio,
        profileVideo:req.body.profileVideo,
        phoneNumber:req.body.phoneNumber,
        uploadDocument:req.body.uploadDocument,
        ProfileHashtag:ProfileHashtag,
    }
    const options = {
        new: true
    }
    userModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateUser