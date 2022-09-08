const express = require('express')
const app = express()
const { userProfileVideoModel } = require('../../../../schemas')

const UpdateVideo = app.put('/update-user-video', (req, res) => {
    const updateData = {
                title: req.body.title,
                pdf: req.body.pdf,
                Img: req.body.Img,
                link: req.body.link,
                thumbnail:req.body.thumbnail,
    }
    const options = {
        new: true
    }
    userProfileVideoModel.findByIdAndUpdate(req.body._id, updateData, options, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})
module.exports = UpdateVideo