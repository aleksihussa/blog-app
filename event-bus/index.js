const express = require('express');
const bodyParser = require('body-parser');
const axios  = require('axios');

const app = express();
app.use(bodyParser.json());



app.post('/events',(req,res)=>{
    const ev = req.body;

    axios.post('http://localhost:4000/events', ev)
    axios.post('http://localhost:4001/events', ev)

    axios.post('http://localhost:4002/events', ev)

    res.send({status: 'OK'});
});

app.listen(4005, ()=>{
    console.log('listening on 4005');
});