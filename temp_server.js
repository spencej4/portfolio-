router.post('/mail', function(req, res, next){


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // create new gmailaccount
        service: 'hotmail' ,
        auth: {
            user: 'm.and.reflex@outlook.com', // generated ethereal user
            pass: 'TestingPassword'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"from New Friend" m.and.reflex@outlook.com`, // sender address
        to: 'spencerjack.sj@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        // text: req.body.text + req.body.from, // plain text body
        html: `<p>${req.body.text}</p><h4>from: ${req.body.from}</h4>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.end()
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        res.end()
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })

});

// async..await is not allowed in global scope, must use a wrapper
// async function main(){
// // router.post('/mail', function(req, res, next){

//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();
  
//     // create reusable transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       auth: {
//           user: 'jesse.runolfsdottir@ethereal.email',
//           pass: 'R1rU2C6RgpwjQcmNru'
//       }
//     });


//     // verify connection configuration
//     transporter.verify(function(error, success) {
//         if (error) {
//         console.log(error);
//         } else {
//         console.log("Server is ready to take our messages");
//         }
//     });
  
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"Fred Foo" <foo@example.com>', // sender address
//       to: "Spencer Jack <spencerjack.sj@gmail.com>", // list of receivers
//       subject: "Hello From Nodemailer!", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>" // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   // });
// };
  
//   main().catch(console.error);