const express = require('express')
const app = express()
const { HubModel, userModel } = require('../../../../schemas');
var findHashtags = require('find-hashtags');

const CreateQuery = app.post('/create-hub', (req, res) => {
    const PostType = req.body.PostType;
    const UserId = req.body.userId;
    var dateTime = new Date();
    userModel.findById(UserId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result === undefined || result.length == 0) {
                res.send("invalid User Id")
            } else {
                const userTotalPost = result.userTotalPosts;
                const userName = result.name;
                const UserImage = result.image;
                const HashtagHub = findHashtags(req.body.HashtagHub)
                // console.log(findHashtags(Hashtag));

                if (PostType === 'post') {
                    const HubCenterCreate = new HubModel({
                        userId: req.body.userId,
                        userImage: UserImage,
                        userName: userName,
                        Title: req.body.Title,
                        PostType: req.body.PostType,
                        TimePosted: dateTime,
                        Purpose: req.body.Purpose,
                        Video: req.body.Video,
                        TotalLikes:0,
                        thumbnail: req.body.thumbnail,
                        creators: req.body.creators,
                        AboutPost: req.body.AboutPost,
                        HashtagHub: HashtagHub,

                    })
                    HubCenterCreate.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            // const userTotalPostNo =result.userId
                            const updateData = {
                                userTotalPosts: parseInt(userTotalPost) + parseInt(1)
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
                } else if (PostType === 'question') {
                    const HubCenterCreate = new HubModel({
                        userId: req.body.userId,
                        userImage: UserImage,
                        userName: userName,
                        Title: req.body.Title,
                        PostType: req.body.PostType,
                        Purpose: req.body.Purpose,
                        TimePosted: dateTime,
                        Video: req.body.Video,
                        TotalLikes:0,
                        thumbnail: req.body.thumbnail,
                        questionReason: req.body.questionReason,
                        AboutPost: req.body.AboutPost,
                        HashtagHub: HashtagHub,


                    })
                    HubCenterCreate.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            const updateData = {
                                userTotalPosts: parseInt(userTotalPost) + parseInt(1)
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
                } else if (PostType === 'job') {
                    const Tag = findHashtags(req.body.Tag)

                    const HubCenterCreate = new HubModel({
                        userId: req.body.userId,
                        userImage: UserImage,
                        userName: userName,
                        Title: req.body.Title,
                        PostType: req.body.PostType,
                        TimePosted: dateTime,
                        Video: req.body.Video,
                        TotalLikes:0,
                        thumbnail: req.body.thumbnail,
                        jobCompanyName: req.body.jobCompanyName,
                        jobDescription: req.body.jobDescription,
                        Purpose: req.body.Purpose,
                        joblocation: req.body.joblocation,
                        jobLong: req.body.jobLong,
                        jobLat: req.body.jobLat,
                        jobSalaryRange: req.body.jobSalaryRange,
                        jobApplicantsId: [],
                        Startdate: req.body.Startdate,
                        AboutPost: req.body.AboutPost,
                        HashtagHub: HashtagHub,
                        Tag: Tag



                    })
                    HubCenterCreate.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            const updateData = {
                                userTotalPosts: parseInt(userTotalPost) + parseInt(1)
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
                } else if (PostType === 'project') {
                    const HubCenterCreate = new HubModel({
                        userId: req.body.userId,
                        userImage: UserImage,
                        userName: userName,
                        Title: req.body.Title,
                        PostType: req.body.PostType,
                        TimePosted: dateTime,
                        Video: req.body.Video,
                        TotalLikes:0,
                        thumbnail: req.body.thumbnail,
                        Purpose: req.body.Purpose,
                        projectDescription: req.body.projectDescription,
                        Workedusers: req.body.Workedusers,
                        AboutPost: req.body.AboutPost,
                        HashtagHub: HashtagHub,
                    })
                    HubCenterCreate.save((error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                            const updateData = {
                                userTotalPosts: parseInt(userTotalPost) + parseInt(1)
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
                } else {
                    console.log("Invalid PostType")


                }
            }
        }
    })


})

module.exports = CreateQuery