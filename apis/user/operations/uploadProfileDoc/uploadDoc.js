const express = require('express')
const app = express()
const { userProfileDocModel, userModel } = require('../../../../schemas');

const CreateQuery = app.post('/uploadDoc', (req, res) => {
    const UserId = req.body.userId;
    userModel.findById(UserId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result === undefined || result.length == 0) {
                res.send("invalid User Id")
            } else {
                // res.send(result)

                        const UploadDoc = new userProfileDocModel({
                            userId: req.body.userId,
                            DocType: req.body.DocType,
                            DocLink: req.body.DocLink,
                            UploadDate: req.body.UploadDate,
                        })
                        UploadDoc.save((error, result) => {
                            if (error) {
                                res.send(error)
                            } else {
                                res.send(result)
                                // const userTotalPostNo =result.userId
                                const updateData = {
                                    $push: {
                                        uploadDocument: result,
                                    },
                                }
                                const options = {
                                    new: true
                                }
                                userModel.findByIdAndUpdate(req.body.userId, updateData, options, (error, result) => {
                                    if (error) {
                                        res.send(error)
                                    } else {
                                        // res.send(result)
                                    }
                                })
                          
                    }
                })



            }
        }
    })


})

module.exports = CreateQuery