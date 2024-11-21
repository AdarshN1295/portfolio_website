const path = require('path');
const express  = require('express');
const sendEmail = require('./mail');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('hbs');
const port = 3300;
// var hbs = require('hbs');

app.use(bodyParser.json());

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
const test = hbs.registerPartials(__dirname + '/partials');
console.log(__dirname + '/partials');

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/our-creations', (req, res)=>{
    res.render('creations');
})

app.get('/services', (req, res)=>{
    res.render('services');
})

app.get('/contact-us', (req, res)=>{
    res.render('contact');
})

app.get('/about-us', (req, res)=>{
    res.render('about');
})

app.post('/send-email', (req, res) => {
    const { name, email, message, phone } = req.body;  // Include phone if needed
  
    sendEmail(name, email, `${message}\nPhone: ${phone}`)
      .then(() => {
        res.json({ message: 'Your message has been sent successfully!' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'There was an error sending your message.' });
      });
  });

app.get('*', (req, res)=>{
    res.send('visit other page')
})


app.listen(port, ()=>{
    console.log(`running from port ${port}`)
})
