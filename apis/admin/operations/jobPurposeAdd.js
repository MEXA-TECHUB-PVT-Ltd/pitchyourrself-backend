const express = require('express')
const app = express()
const {  adminjobPurposeModel } = require('../../../schemas');

const CreatePurpose = app.post('/create-job-purpose', (req, res) => {
   
    const purposeAdd = new adminjobPurposeModel({
       Name:req.body.Name,
    })
    purposeAdd.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = CreatePurpose