const express = require('express')
const sendToMeRouter = express.Router()
const nodemailer = require('nodemailer')


const transport = {
    //all of the configuration for making a site send an email.
  
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  };

  const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users readyxx to mail myself')
    }
  });

  //req.body.email
  sendToMeRouter.post('/', (req,res, next) => {
    //make mailable object
    const mail = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.text
      
    }
    transporter.sendMail(mail, (err,data) => {
        if(err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
            status: 'success'
          })
        }
      })
    
      });




module.exports = sendToMeRouter