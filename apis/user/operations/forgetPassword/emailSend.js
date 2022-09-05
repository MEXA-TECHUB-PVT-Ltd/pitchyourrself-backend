const express = require('express')
const app = express()
var nodemailer  = require('nodemailer')

const { userModel,forgetPasswordModel} = require('../../../../schemas')

const emailSend =app.post('/email-send', async(req,res)=>{
    // let data=req.body.email;
    let data = await userModel.findOne({
        email:req.body.email});
        // console.log(data)
        const responseType ={};
        if(data){
            let otpcode = Math.floor((Math.random()*10000)+1);
            let otpData =new forgetPasswordModel({
                email:req.body.email,
                code:otpcode,
                expiresIn:new Date().getTime()+ 300*1000
            })
            let otpResponse=await otpData.save();
            responseType.statusText = 'Success'
            mailer(req.body.email,otpcode)
            // console.log(otpcode)
            responseType.message='Please check Your Email Id';
            responseType.otp=otpcode;

            
           
        }else{
            responseType.statusText = 'error'
            responseType.message='Email Id not Exist';
        }
        res.status(200).json(responseType)
})


const mailer  =(email,otp) =>{
    var transporter = nodemailer.createTransport({
        service:'gmail',
        port: 587,
        secure:false,
        auth:{
            user:'rimshanimo22@gmail.com',
            pass:'oespmdfxhmbhrxgd'
        }
    });
    transporter.verify().then(console.log).catch(console.error);

      // send mail with defined transport object
    var mailOptions ={
        from :'rimshanimo22@gmail.com',
        to:email,
        subject:`OTP code is `+otp,
        text:`Email Verification :OTP code is `+otp,

    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            // console.log('Email sent ' + info.response)
        }
    });
}
module.exports = emailSend