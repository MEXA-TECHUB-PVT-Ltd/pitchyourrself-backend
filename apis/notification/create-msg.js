const express = require('express')
const app = express()
const { Notification, userModel } = require('../../schemas')

const CreateNotification = app.post('/create-msg', (req, res) => {
    const toUser = req.body.to;
    userModel.findById(toUser, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            // res.send(result)
            try {
                const ToName = result.name
                const ToImg = result.image
                const notificationMessage = new Notification({
                    from: req.body.from,
                    to: req.body.to,
                    toName: ToName,
                    toImg: ToImg,
                    msgContent: req.body.msgContent,
                    dateTime: req.body.dateTime,
                    readStatus: false
                })
                notificationMessage.save((error, result) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send(result)
                    }
                })
            } catch (err) {
                res.status(400).send(err);
            }
           

        }
    })

})
module.exports = CreateNotification