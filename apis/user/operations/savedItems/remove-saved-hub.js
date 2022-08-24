const express = require('express')
const app = express()
const { savedHubModel } = require('../../../../schemas')

const DeleteProduct = app.delete('/unsave-hub', (req, res) => {
    savedHubModel.findByIdAndDelete(req.body._id, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.sendStatus(200)
        }
    })
})
module.exports = DeleteProduct