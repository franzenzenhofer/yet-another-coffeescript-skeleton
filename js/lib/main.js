/*! yet-another-coffescript-skeleton - v0.0.2 - last build: 2013-03-23 16:58:00 */
(function() {
  var socket;

  socket = io.connect('http://localhost');

  socket.on('news', function(data) {
    console.log(data);
    return socket.emit('my other event', {
      my: 'data'
    });
  });

}).call(this);
