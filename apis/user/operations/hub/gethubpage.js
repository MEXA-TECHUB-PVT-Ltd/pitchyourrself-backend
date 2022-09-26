const express = require('express')
const app = express()
const { HubModel } = require('../../../../schemas')

const GetAllUsers = app.get('/get-all-hubs-page', (req, res) => {


    HubModel.find({}, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            const page = parseInt(req.query.page)
            const limit = parseInt(req.query.limit)
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit

            const results = {}
            if(endIndex<result.length){
                results.next = {
                    page: page + 1,
                    limit: limit
                }
            }
          
            if(startIndex>0){
                results.previous = {
                    page: page - 1,
                    limit: limit
                }
            }
          
            results.results = result.slice(startIndex, endIndex)
            res.send(results)
        }
    }).populate("RecommendationsPitchId")
        .populate("jobApplicantsId")
        .populate("userId")
        .populate("userSocialLinks")
        .populate("userProfileVideoId")
        // .populate("profileVideoId")


})
module.exports = GetAllUsers