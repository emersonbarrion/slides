window.onload = function() {
    var socket = io.connect('http://WRKPHDEVEMBA:3000');

    socket.on('slide number', function (data) {
        document.getElementById('slide').innerHTML = data;
    }); 
}