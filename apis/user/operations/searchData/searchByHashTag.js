const express = require('express')
// var findHashtags = require('find-hashtags');

const { userModel } = require('../../../../schemas')
const app = express()

const GetSearchHub = app.get('/search-hashtag', (req, res) => {
    const ProfileHashtag = req.query.ProfileHashtag; 
    // console.log(findHashtags(ProfileHashtag));
// ['text', 'useful']
        userModel.find({ ProfileHashtag:ProfileHashtag }, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                if (result === undefined || result.length == 0) {
                    res.send("Wrong Data ")
                } else {
                    res.send(result)
                }
            }
        })
})
module.exports = GetSearchHub