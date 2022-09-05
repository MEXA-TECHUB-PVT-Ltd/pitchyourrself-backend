const express = require('express')
const app = express()
const { userProfileVideoModel, userModel } = require('../../../../schemas')
const CompleteSocialLinkProfile = app.post('/create-profile-Video', (req, res) => {
    userModel.findById(req.body.userId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            const emailUser = result.email
            userProfileVideoModel.find({ userId: req.body.userId }, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    if (result === undefined || result.length == 0) {
                        const newLinkProfile = new userProfileVideoModel({
                            userId: req.body.userId,
                            title: req.body.title,
                            pdf: req.body.pdf,
                            Img: req.body.Img,
                            link: req.body.link,
                            email: emailUser,
                            AddContactId: [],
                            hidden: req.body.hidden,
                            Downloadable: req.body.Downloadable

                        })
                        newLinkProfile.save((error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                res.send(result)
                                // Update User 
                                const updateData = {
                                    $push: {
                                        profileVideoId: result._id,
                                    }
                                }
                                const options = {
                                    new: true
                                }
                                userModel.findByIdAndUpdate(result.userId, updateData, options, (error, result) => {
                                })
                            }
                        })
                    } else {
                        res.send("Profile Video Exists either Delete it or Update it")
                    }
                }
            })



        }
    })

})
module.exports = CompleteSocialLinkProfile