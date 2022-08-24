const express = require('express')
const app = express()
const { favouriteUsersProfileModel, userModel ,HubModel} = require('../../../../schemas')
const CommentPitch = app.post('/add-profile-fav', (req, res) => {
    userModel.findById(req.body.userId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            userModel.findById(req.body.favouritesProfileUserId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const UserName = result.name;
                    const UserImage = result.image;
                    const UserEmail = result.email;
                    const UserProfession = result.profession;
                    const UserBio = result.bio;
                    const ProfileVideo =result.profileVideo;



                    const newCommentPitch = new favouriteUsersProfileModel({
                        userId: req.body.userId,
                        favouritesProfileUserId: req.body.favouritesProfileUserId,
                        FavUserName: UserName,
                        FavImage: UserImage,
                        FavEmail:UserEmail,
                        FavProfession:UserProfession,
                        FavBio:UserBio,
                        FavProfileVideo:ProfileVideo,
                    })
                    newCommentPitch.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            // Update User 
                            const updateData = {
                                $push: {
                                    favouritesId: result._id,
                                }
                            }
                            const options = {
                                new: true
                            }
                            userModel.findByIdAndUpdate(result.userId, updateData, options, (error, result) => {
                            })
                        }
                    })
                }
            })

        }
    })

})
module.exports = CommentPitch