window.onload = function() {
    var socket = io.connect('http://WRKPHDEVEMBA:3000');

    socket.on('slide number', function (data) {
        document.getElementById("next").onclick = function() {
            socket.emit('slide number', data + 1);
        };

        document.getElementById("previous").onclick = function() {
            socket.emit('slide number', data - 1);
        };
    }); 
}