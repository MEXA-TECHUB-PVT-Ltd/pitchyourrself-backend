const express = require('express')
const app = express()
const { ContactsModel, userModel, userProfileVideoModel } = require('../../../../schemas')
const ContactAdd = app.post('/add-contact', (req, res) => {

    userModel.findById(req.body.contactId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            const Name = result.name;
            const Number = result.phoneNumber;
            const Img = result.image;
            const Profession = result.profession;
            const Bio = result.bio;

            const newLinkProfile = new ContactsModel({
                videoId: req.body.videoId,
                contactId: req.body.contactId,
                contactName: Name,
                contactNumber: Number,
                contactImg: Img,
                contactProfession: Profession,
                contactBio: Bio
            })
            newLinkProfile.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                    // Update User 
                    const updateData = {
                        $push: {
                            AddContactId: result._id,
                        }
                    }
                    const options = {
                        new: true
                    }
                    userProfileVideoModel.findByIdAndUpdate(result.videoId, updateData, options, (error, result) => {
                    })
                }
            })
        }
    })

})
module.exports = ContactAdd