const express = require('express')
const app = express()
const {  HelpCenterdModel ,userModel} = require('../../../../schemas');

const CreateQuery = app.post('/create-helpquery', (req, res) => {
   const UserId=req.body.userId
   userModel.findById(UserId, (error, result) => {
    if (error) {
        res.send(error)
    } else {
        // res.send(result)
        const email=result.email;
        const name=result.name;
        const HelpCenterQuery = new HelpCenterdModel({
            userId: req.body.userId,
            email: email,
            name:name,
           details:req.body.details,
        })
        HelpCenterQuery.save((error, result) => {
            if (error) {
                res.send(error)
            } else {
                res.send(result)
            }
        })

    }
})
    
})

module.exports = CreateQuery