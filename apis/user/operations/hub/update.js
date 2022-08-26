const express = require('express')
const app = express()
const { HubModel } = require('../../../../schemas')
var findHashtags = require('find-hashtags');

const UpdateProduct = app.put('/update-hub', (req, res) => {
    HubModel.findById(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result === undefined || result.length == 0) {
                res.send("invalid Hub Id")

            } else {
                const HashtagHub= findHashtags(result.HashtagHub)
            const PostType = result.PostType;
            if (PostType === 'post') {
                const updateData = {
                        Title: req.body.Title,
                        PostType: PostType,
                        Video: req.body.Video,
                        creators: req.body.creators,
                        HashtagHub: HashtagHub
                    }
                    const options = {
                        new: true
                    }
                    HubModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                        }
                    })
            } else if (PostType === 'question') {
                const updateData = {
                    Title: req.body.Title,
                    PostType: PostType,
                    Video: req.body.Video,
                    questionReason: req.body.questionReason,
                    HashtagHub: HashtagHub

                }
                const options = {
                    new: true
                }
                HubModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
             
            } else if (PostType === 'job') {

                const updateData = {
                    Title: req.body.Title,
                    PostType:PostType,
                    Video: req.body.Video,
                    jobCompanyName: req.body.jobCompanyName,
                    jobDescription: req.body.jobDescription,
                    joblocation: req.body.joblocation,
                    jobSalaryRange:req.body.jobSalaryRange,
                    Startdate: req.body.Startdate,
                    HashtagHub: HashtagHub

                }
                const options = {
                    new: true
                }
                HubModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
                
            } else if (PostType === 'project') {
                const updateData = {
                    Title: req.body.Title,
                    PostType: PostType,
                    Video: req.body.Video,
                    projectDescription: req.body.projectDescription,
                    Workedusers: req.body.Workedusers,
                    HashtagHub: HashtagHub

                }
                const options = {
                    new: true
                }
                HubModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else {
                res.send("Invalid Hub POst Type")


            }
            }

        }
    })
    // const updateData = {
    //     productName: req.body.productName,
    //     image: req.body.image,
    //     price: req.body.price,
    //     shopName:req.body.shopName,
    //     deliveryFee:req.body.deliveryFee,
    //     brand:req.body.brand,
    //     description:req.body.description,
    //     detail:req.body.detail
    // }
    // const options = {
    //     new: true
    // }
    // HubModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
    //     if (error) {
    //         res.send(error)
    //     } else {
    //         res.send(result)
    //     }
    // })
})
module.exports = UpdateProduct