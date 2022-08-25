const express = require('express')
const { userModel } = require('../../../../schemas')
const app = express()

const GetSearchPerson = app.get('/search-person', (req, res) => {
const name=req.query.name;
if(name==null){
    res.send("No result")
}else{
    userModel.find({name: req.query.name }, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            if (result === undefined || result.length == 0) {
                res.send("Wrong Data ")
            }else{
                res.send(result)
            }
        }
    })
}


})
module.exports = GetSearchPerson