const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const apiRouter = require('./api/api');
const path = require('path')
const root = require('path').join(__dirname, 'client', 'build')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.urlencoded({extended: true}))
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRouter)

app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})