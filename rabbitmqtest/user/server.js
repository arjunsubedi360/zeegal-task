const express = require('express');
const amqplib = require('amqplib/callback_api');

const app = express();
const port = 4001;

app.get('/users',( req, res)=> {
    let data = {
        id: 1, 
        name: "Arjun Subedi",
        age: 25
    };

    amqplib.connect('amqp://admin:admin@rabbitmq:5672', function(err, conn) {
        conn.createChannel(function(err, ch) {
         const queue = 'message_queue_user';
         const msg = JSON.stringify(data);
         ch.assertExchange(queue, ({durable: false}));
         ch.sendToQueue(queue, msg);

         console.log(`Sent ${msg} to ${queue}`)
        })
    })
    res.send("Hi i am called from user")
})

app.listen(port, ()=> {
    console.log(`Server listing at ${port}`)
})