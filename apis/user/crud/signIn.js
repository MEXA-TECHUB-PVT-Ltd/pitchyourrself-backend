const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { userModel } = require('../../../schemas')

const LoginUser = app.put('/login-user', (req, res) => {
    const session = bcrypt.hashSync(Math.floor(Math.random() * 1000).toString(), 12)
    const findUser = {
        email: req.body.email
    }
    userModel.findOne(findUser, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result) {
                if (bcrypt.compareSync(req.body.password, result.password)) {
                    userModel.findOneAndUpdate(findUser, { session: session }, { new: true }, (error, result) => {
                        if (error) {
                            res.send(error)
                        } else {
                            res.send(result)
                        }
                    })
                } else {
                    res.sendStatus(401)
                }
            } else {
                res.sendStatus(404)
            }
        }
    })
})

module.exports = LoginUser