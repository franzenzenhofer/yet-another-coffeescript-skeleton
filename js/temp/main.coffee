# /*! yet-another-coffescript-skeleton - v0.0.2 - last build: 2013-03-23 16:58:00 */
socket = io.connect('http://localhost')
socket.on('news', (data) ->
  console.log(data)
  socket.emit('my other event', { my: 'data' })
)