const express = require('express')
const app = express()
const { HubModel,userModel } = require('../../../../schemas')

const DeleteAdmin = app.delete('/deleteAnyPost', (req, res) => {
    HubModel.findById(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const UserId = result.userId
            userModel.findById(UserId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    // res.send(result)
                    const userTotalPosts = parseInt(result.userTotalPosts) - parseInt(1)
                            const updateData = {
                                userTotalPosts: userTotalPosts
                            }
                            const options = {
                                new: true
                            }
                            userModel.findByIdAndUpdate(UserId, updateData, options, (error, result) => {
                                if (error) {
                                    res.send(error)
                                } else {
                                    // res.send(result)
                                }
                            })
                             HubModel.findByIdAndDelete(req.body._id, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.sendStatus(200)
                        }
                    })
                }
            })
    //        
        }
    })
   
})
module.exports = DeleteAdmin