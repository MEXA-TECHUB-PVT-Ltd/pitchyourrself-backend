const {MessageModel } = require('../../schemas')
const express = require('express')
const app = express()

const CreateMsg = app.post('/add-msg-socket', (req, res,next) => {
    try {
        const { from, to, message } = req.body;
        const data = MessageModel.create({
          message: { text: message },
          users: [from, to],
          sender: from,
        });
    
        if (data) return res.json({ msg: "Message added successfully." });
        else return res.json({ msg: "Failed to add message to the database" });
      } catch (ex) {
        next(ex);
      }
})

module.exports = CreateMsg

  