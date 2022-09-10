const express = require('express')
const app = express()
const { ApplyJobModel, userModel, HubModel } = require('../../../../schemas')
const CompleteSocialLinkProfile = app.post('/apply-for-job', (req, res) => {
    userModel.findById(req.body.userId, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            HubModel.findById(req.body.hubId, (error, result) => {
                if (error) {
                    res.send(error)
                } else {
      const NewJobApplicant = new ApplyJobModel({
                userId: req.body.userId,
               hubId:req.body.hubId,
               video:req.body.video,
               thumbnail:req.body.thumbnail,
               Status:"Unapproved",
               AppliedDate:req.body.AppliedDate
            })
            NewJobApplicant.save((error, result) => {
                if (error) {
                    res.send(error)
                } else {
                    res.send(result)
                    // Update User 
                    const updateData = {
                        $push: {
                            jobApplicantsId: result._id,
                        }
                    }
                    const updateData1 = {
                        $push: {
                            userAppliedJobsId: result._id,
                        }
                    }
                    const options = {
                        new: true
                    }
                    HubModel.findByIdAndUpdate(result.hubId, updateData, options, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {

                        }
                    })
                    userModel.findByIdAndUpdate(result.userId, updateData1, options, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {

                        }
                    })
                }
            })
                }
            })
          
        }
    })

})
module.exports = CompleteSocialLinkProfile