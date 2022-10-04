const express = require('express')
// var findHashtags = require('find-hashtags');

const { HubModel } = require('../../../../schemas')
const app = express()

const GetSearchHub = app.get('/search-hub', (req, res) => {
    const HashtagHub = req.query.HashtagHub; 
    // console.log(findHashtags(HashtagHub));
// ['text', 'useful']
        HubModel.find({ HashtagHub:HashtagHub }, (error, result) => {
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