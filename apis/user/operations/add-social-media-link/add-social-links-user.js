const express = require('express')
const app = express()
const { UserProfileLinksModel, userModel, HubModel } = require('../../../../schemas')
const CompleteSocialLinkProfile = app.post('/create-social-link', (req, res) => {
    userModel.findById(req.body.userId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
                const newLinkProfile = new UserProfileLinksModel({
                userId: req.body.userId,
               icon:req.body.icon,
               link:req.body.link,
               iconUrl:req.body.iconUrl
            })
            newLinkProfile.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                    // Update User 
                    const updateData = {
                        $push: {
                            UserProfileLinkId: result,
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

})
module.exports = CompleteSocialLinkProfile