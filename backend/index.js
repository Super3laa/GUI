const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
let smartwatch = require('./routes/smartwatch');
let user = require('./routes/user')
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

app.use('/smartwatch',smartwatch)
app.use('/user',user)
app.listen(port);

