// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// const sgMail = require('@sendgrid/mail')
// // sgMail.setApiKey(process.env.SENDGRID_API_KEY)



// const sendWelcomeEmail = (email, name) =>{
//     sgMail.send({
//         to: email,
//         from: 'benjamin@example.com',
//         subject: 'Test Mail',
//         text: `Welcome to the app, ${name}. We hope to make your life easier.`
//     })
// }

// const sendDeleteEmail = (email, name) =>{
//     sgMail.send({
//         to: email,
//         from: 'benjamin@example.com',
//         subject: 'Sad to see you go',
//         text: `Hello, ${name}. We are sad to see you go. Is there anything we could have do better?`
//     })
// }

// module.exports = {
//     sendWelcomeEmail,
//     sendDeleteEmail
// }