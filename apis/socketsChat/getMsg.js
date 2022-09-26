const { MessageModel } = require('../../schemas')
const express = require('express')
const app = express()
const GetMsg = app.get('/get-msg-socket', (req, res, next) => {

    try {
        const { from, to } = req.body;

        const messages = MessageModel.find({
            users: {
                $all: [from, to],
            },
        }).sort({ updatedAt: 1 });

        const projectedMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });
        res.json(projectedMessages);
    } catch (ex) {
        next(ex);
    }
})

module.exports = GetMsg