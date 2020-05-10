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
    console.log(req.body,)
    console.log(req.body.img)
    console.log(req.body.ha)
    console.log(req.body.items)
    console.log(req.body.items[0].img)

    //let data = blam(req.body.items)
    let data = req.body.items

    console.log(data[0].img)

    console.log(typeof data)
    console.log(Object.keys(data).length)
    
    blam = {
         info : blam(data)
    
      }
    



    
    const mail = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.text,

      //html : `<p><b>Hello, this is not a drill</b> <img src= ${req.body.items[1].img} width = "50"  height = "40"/> </p>`
      html : `${blam.info}`
      //html : `${data}`
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


  function blam(data){
    
    let count = Object.keys(data).length
    //let x  = document.write("<h1>Hello World!</h1><p>Have a nice day!</p>")
    let xx = ""
    //console.log(typeof true)
    console.log("the count is: " + count)
    console.log("in the blam")
    console.log(typeof data)

    for(let i = 0 ; i < count; i++){
      //xx.concat("<h1>Hello World!</h1><p>Have a nice day!</p>")
      
      console.log(data[i].img)
      xx += `<h1>Hello World! <img src =${data[i].img} /> </h1>`
    }

    //let xx =
    //console.log("wtf") 
    console.log(xx);
    return xx;
  }

  // blam = {
  //   info : blam()

  // }




module.exports = sendToMeRouter