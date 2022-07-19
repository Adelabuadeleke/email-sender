const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const app  = express();
const port = 3000

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
})

let mailOptions =  {
    from: 'kamade123@gmail.com',
    to: 'kamade123@gmail.com',
    subject: 'Nodemailer Server',
    text: 'Hi from your nodemailer server🙂'
}

transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log("Error:" + err)
    } else {
        console.log("Email sent sucessfully");
    }
});

app.listen(port, ()=> {
    console.log(`server listening on port http://localhost:${port}`)
})