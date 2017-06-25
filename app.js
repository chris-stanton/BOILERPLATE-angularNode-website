
DotEnv = require('dotenv-node');
new DotEnv();

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

app.set('port', (process.env.PORT || 5000));

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//create default SMTP transport
var transporter = nodemailer.createTransport(smtpTransport({
    service: process.env.ACCOUNT_SERVICE,
    auth: {
        user: process.env.ACCOUNT_NAME,
        pass: process.env.ACCOUNT_PASSWORD
    }
}));

app.post('/mail', function(req,res){
    var mailer = req.body;

    var mailOptions = {
        from: '"angularNode-website", <development.testing84@yahoo.com>',
        to: process.env.ACCOUNT_RECIEVER,
        subject: 'Email From: angularNode-website',
        text: mailer.email,
        html: '<b>' + 'Name: ' + mailer.name + '<br/>' +
              '<b>' + 'Email: ' + mailer.email + '<br/>' +
              '<b>' + 'Message:  ' + mailer.message + '</b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.send(200);
});//end of app.post()

app.get('/', function(req,res){
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});


module.exports = app;
