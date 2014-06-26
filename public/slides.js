window.onload = function() {
    var socket = io.connect('http://rocky-depths-3828.herokuapp.com:3000');

    socket.on('slide number', function (data) {
        document.getElementById('slide').innerHTML = data;
    }); 
}