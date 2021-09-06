const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const urlRouter = require('./routes/url.route')


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, '..', '/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.use('/api/shorturl', urlRouter);




module.exports=app;