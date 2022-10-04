const express = require('express')
const { ContactsModel, userModel, userProfileVideoModel } = require('../../../../schemas')

const app = express()
// Error 
const GetUserRecipients = app.get('/remove-contact-video', (req, res) => {
  
    ContactsModel.find({contactId: req.query.contactId,videoId:req.query.videoId }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            const Id = result._id;
            const videoId = req.query.videoId;


    userProfileVideoModel.findById(videoId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
            // res.send(result)


                    const updateData = {
                        $pull: {
                            AddContactId: req.query.contactId,
                        },
                    }
                    const options = {
                        new: true
                    }
                    userProfileVideoModel.findByIdAndUpdate(videoId, updateData, options, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                        }
                    })
                    ContactsModel.findByIdAndDelete(Id, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                        }
                    })
                }
            })
        }
    })


})
module.exports = GetUserRecipients