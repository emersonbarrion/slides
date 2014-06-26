window.onload = function() {
    var socket = io.connect();

    socket.on('slide number', function (data) {
        document.getElementById('slide').innerHTML = data;
    }); 
}