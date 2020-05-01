const nodemailer = require("nodemailer");
require('dotenv').config();
const express = require('express');
const app = express()
const port = 4000


app.get('/', (req, res) => res.send('Hello fucker'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.use(express.json())
sendToMeRouter = app.use('/Mail', require('./Mail'))