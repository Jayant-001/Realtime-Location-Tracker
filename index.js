const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);
const path = require('path')

app.set('view engine', "ejs");
// app.set(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
     res.render("index")
})

io.on('connection', (socket) => {
    socket.on("send-location", function(data) {
        io.emit("receive-location", {id: socket.id, ...data});
    })
    socket.on("disconnect", function() {
        io.emit("user-disconnected", socket.id)
    })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});