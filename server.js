var dotenv = require('dotenv').config();
var express = require('express');
const nodemailer = require("nodemailer");
var app = express();
const port = 3000;


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

const user = process.env.USER_EMAIL;
const pass = process.env.USER_PASSWORD;

// use res.render to load up an ejs view file

// home page
app.get('/', function(req, res) {
  res.render('pages/homepage');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// solutions page
app.get('/solutions', function(req, res) {
  res.render('pages/solutions');
});

app.get('/managedPrint', function(req, res) {
  res.render('pages/solutions');
});

app.get('/onsiteRepairs', function(req, res) {
  res.render('pages/onsiteRepairs');
});

app.get('/psa', function(req, res) {
  res.render('pages/psagreement');
});

// products page
app.get('/products', function(req, res) {
  res.render('pages/products');
});

// finance page
app.get('/finance', function(req, res) {
  res.render('pages/finance');
});

// contact page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

// app.post("/contact", function(req,res){
//   const API_KEY = pass;
// const DOMAIN = user;

// const formData = require('form-data');
// const Mailgun = require('mailgun.js');
// console.log(formData)
// const mailgun = new Mailgun(formData);
// const client = mailgun.client({username: user, key: pass});

// const messageData = {
//   from: "sakina@gmail.com",
//   to: "sanayousef101@yahoo.com",
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };

// client.messages.create(DOMAIN, messageData)
//  .then((res) => {
//    console.log(res);
//  })
//  .catch((err) => {
//    console.error(err);
//  });
// })

app.post("/contact", function(req,res){
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user,
       pass
    }
});

const mailOptions = {
    from: `CLIENT: ${req.body.email}`,
    to: process.env.USER_EMAIL,
    subject: `Inquiry from ${req.body.email} about Print House UK`,
    html: `<strong>Name: </strong> ${req.body.name} <br>
    <strong>Contact: </strong>  ${req.body.mobile} <br>
    <strong>Message: </strong>${req.body.message}`
  }

transporter.sendMail(mailOptions, (error, responose) => {
    if(error) {
        console.log(error);
        res.send("error")
    } else {
        console.log("Email Sent");
        res.send("success")
    }
})
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`)
});