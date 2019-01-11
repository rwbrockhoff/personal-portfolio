const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



app.post('/api/sendemail', (req, res) => {

    let { name, message, email } = req.body.emailMessage

    const msg = {
        to: 'brockhoffrw@gmail.com',
        from: email,
        subject: `Message from ${name}`,
        text: message
    };

    sgMail.send(msg);
    res.sendStatus(200)

})


const SERVER_PORT = process.env.SERVER_PORT || 3040;
app.listen(SERVER_PORT, () => {
    console.log(`Server listening: ${SERVER_PORT}`)
})