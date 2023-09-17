const express = require('express');
const amqplib  = require('amqplib/callback_api');

const app = express();
const port = 4000;

app.get('/products',( req, res)=> {
    amqplib.connect('amqp://admin:admin@rabbitmq:5672', function(err, conn) {
        console.log("conn", conn)
        conn.createChannel(function(err, ch) {
            const queue = 'message_queue_user';
            ch.assertQueue(queue, ({durable: false}));
            console.log("Waiting for the message from queue");
            ch.consume(queue, function(msg) {
                console.log("Msg", msg)
                res.send(msg)
            }, {noAck: true})
        })
    })
    res.send("Hi i am called from product")
})

app.listen(port, ()=> {
    console.log(`Server listing at ${port}`)
})