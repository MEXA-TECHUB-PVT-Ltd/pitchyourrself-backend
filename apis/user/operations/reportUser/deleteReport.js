const express = require('express')
const app = express()
const { reportModel } = require('../../../../schemas')

const DeleteReport = app.delete('/delete-report', (req, res) => {
    reportModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteReport