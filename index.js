var express = require('express'),
    app = express.createServer(),
    io = require('socket.io').listen(app),
    slideNum = 1;

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});

app.use(express.static(__dirname + '/public'));

app.get("/presenter", function(req, res){
    res.sendfile('view/controller.html', {root: __dirname})
});

app.get("/", function(req, res){
    res.sendfile('/view/index.html', {root:__dirname});
});

io.sockets.on('connection', function (socket) {
	io.sockets.emit('slide number', slideNum);
    socket.on('slide number', function (data) {
    	slideNum = data;
        io.sockets.emit('slide number', slideNum);
    });

    socket.on('message', function (data) {
        io.sockets.emit('message', data);
    });
});