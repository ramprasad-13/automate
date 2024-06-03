const express = require('express');
const hostname="0.0.0.0"
const port = process.env.PORT || 3000;
const app=express();

//routes
const postdata= require('./routes/postdata')
const getdata = require('./routes/getdata')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(postdata)
app.use(getdata)


app.get("/",(req,res)=>{
    res.json({"success":"App deployed sucessfully"})
})

app.listen(port,hostname,()=>{
    console.log(`app started listening http://localhost:${port}`);
})

module.exports = app;
