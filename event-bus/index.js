const express = require('express');
const bodyParser = require('body-parser');
const axios  = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events',(req,res)=>{
    const ev = req.body;

    events.push(ev);
    axios.post('http://localhost:4000/events', ev)
    .catch((err) =>{console.log(err)})
    axios.post('http://localhost:4001/events', ev)
    .catch((err) =>{console.log(err)})

    axios.post('http://localhost:4002/events', ev)
    .catch((err) =>{console.log(err)})
    axios.post('http://localhost:4003/events', ev)
    .catch((err) =>{console.log(err)})

    res.send({status: 'OK'});
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, ()=>{
    console.log('listening on 4005');
});