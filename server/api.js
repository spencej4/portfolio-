const express= require('express');
const nodemailer = require('nodemailer');

const fs = require('fs');
const path = require('path');
let config = JSON.parse(fs.readFileSync("config.json"));

const router = express.Router();

// router.post('/mail', function(req, res, next){
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     secure: false, 
//     port: 25, 
//     auth: {
//       user: 'spencerjack.sj@gmail.com',
//       pass: config.password
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   let HelperOptions = {
//     from: '"Spencer Jack <spencerjack.sj@gmail.com',
//     to: 'spencerjack.sj@gmail.com',
//     subject: req.body.subject ,// subject line
//     text: req.body.text + req.body.from, // plain text body
//     html: `<p>${req.body.text}</p><h4>from: ${req.body.from}</h4>` // html body
//   }

//   transporter.sendMail(HelperOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("The message was sent!");
//     console.log(info);
//   })
// });


// module.exports = router;

// works:
let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false, 
  port: 25, 
  auth: {
    user: 'spencerjack.sj@gmail.com',
    pass: config.password
  },
  tls: {
    rejectUnauthorized: false
  }
});


let HelperOptions = {
  from: '"Spencer Jack <spencerjack.sj@gmail.com',
  to: 'spencerjack.sj@gmail.com',
  subject: "hello Wooorld",
  text: 'Wow this works!'
};


transporter.sendMail(HelperOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("The message was sent!");
  console.log(info);
})
 


module.exports = router;
