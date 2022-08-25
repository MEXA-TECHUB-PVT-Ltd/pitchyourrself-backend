const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const { userModel } = require('../../../schemas')

const CreateUser = app.post('/signup-user', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    userModel.find({ email: req.body.email }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
          
            if (result === undefined || result.length == 0) {
                // console.log(' doctor not exist')
                const user = new userModel({
                    name:null,
                    image: null,
                    email: req.body.email,
                    password: hashedPassword,
                    session: session,
                    profession: null,
                    bio:null,
                    profileVideoId:[],
                    profileStatus:'Public',
                    phoneNumber:null,
                    userTotalPosts:0,
                    TotalLikes:0,
                    uploadDocument:null,
                    verifyStatus:true,
                    userAppliedJobsId:[],
                    UserProfileLinkId:[],
                    RecommendationsUserId:[],
                    favouritesId:[],
                    savedHubsId:[],
                    LikesUsersId:[],
                    ProfileHashtag:null

                })
                user.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } else {
                res.send("Email Already Exist")

            }
        }
    })

})
module.exports = CreateUser