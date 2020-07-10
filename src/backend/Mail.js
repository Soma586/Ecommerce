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

    let data = req.body.items

    blame = {
         info : blam(data, req.body.total)
    
      }
    


    const mail = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Confimation order from TM store",
      html : `<table> ${blame.info} </table>`
    
    }

    console.log("email message was created")
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


  function blam(data, total){
    
    let count = Object.keys(data).length
    //let x  = document.write("<h1>Hello World!</h1><p>Have a nice day!</p>")
    let xx = ""
  

    for(let i = 0 ; i < count; i++){
    
      xx += `<tr> <img src =${data[i].img} width = "215"  height = "215" /> <p display : inline-block >quantity is ${data[i].quantity} </p> <hr> </tr>`
    }

    xx += `<tr>Item subtotal $${total}</tr>`
    return xx;
  }





module.exports = sendToMeRouter