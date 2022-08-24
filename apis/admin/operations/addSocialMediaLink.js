const express = require('express')
const app = express()
const {  adminSocialLinkModel } = require('../../../schemas');

const CreateLink = app.post('/create-adminLink', (req, res) => {
   
    const iconAdmin = new adminSocialLinkModel({
       Name:req.body.Name,
       icon:req.body.icon
    })
    iconAdmin.save((error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

module.exports = CreateLink