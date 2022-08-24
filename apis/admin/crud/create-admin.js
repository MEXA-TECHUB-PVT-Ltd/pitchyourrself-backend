const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const { adminModel } = require('../../../schemas')

const CreateAdmin = app.post('/create-admin', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)
    adminModel.find({ email: req.body.email }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            if (result === undefined || result.length == 0) {
                // console.log(' doctor not exist')
                const admin = new adminModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                    image:req.body.image,
                    session: session,
                  
                })
                admin.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            }else{
                res.send("Email Already Exist")

            }
        }
    })
   
})
module.exports = CreateAdmin