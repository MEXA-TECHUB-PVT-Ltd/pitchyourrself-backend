const { MessageModel } = require('../../schemas')
const express = require('express')
const app = express()
const GetMsg = app.post('/get-msg-socket', (req, res, next) => {

    try {
        const { from, to } = req.body;
        const messages = MessageModel.find({ users: {
                    $all: [from, to],
                }
            }, (error, result) => {
            if (error) {
                res.send(error)
            } else {
                const projectedMessages = result.map((msg) => {
                        return {
                            fromSelf: msg.sender.toString() === from,
                            message: msg.message.text,
                        };
                    });
                    res.json(projectedMessages);
            }
        })
     
    } catch (ex) {
        next(ex);
    }
})

module.exports = GetMsg