const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import routes
const demosRoute = require('./routes/demos');

//Middleware
app.use('/demos', demosRoute);
app.use('/', (req, res) => {
    const Doc = "GET /demos: List of demos <br/> POST /demos create a new demo: json body {\"name\": \"Test\", \"url\": \"https://amppa.dev/\"} <br/> PATCH /demos/{demoId} update existing demo with id (obtain from GET) json body accepts name or url";
    res.send(Doc);
});

//Db connection
mongoose.connect(process.env.db_conn, { useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log('Database connection error! error: ' + err);
});


//LISTEN TO THE SERVER
app.listen(process.env.PORT || 8000);