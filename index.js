/**
 * Created by aakashkataria on 26/07/16.
 */
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

io.on('connection', function (socket) {
    socket.on('chat', function (data) {
        //io.emit('chat', data);
        socket.broadcast.emit('chat', data);
    })
});
app.set('port', process.env.PORT || 3000);
app.use('/', express.static(__dirname + '/public_html'));

server.listen(app.get('port'), function () {
    console.log('server up at ' + app.get('port'));
})

