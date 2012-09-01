fs     = require 'fs'
{exec} = require 'child_process'

path_to_bin = '/Users/franzseo/bin/'
closure_compiler = path_to_bin+'compiler.jar'
html_compressor = path_to_bin+'htmlcompressor.jar'
yui = path_to_bin+'yui.jar'

#coffee --watch --compile --output js/lib/ js/src/
task 'watch', 'watch and compile coffeescript', ->
  exec 'coffee --watch --compile --output js/lib/ js/src/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
  
task 'compile', 'compile coffeescript', ->
  exec 'coffee --compile --output js/lib/ js/src/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'dev', 'set up dev envirement', ->
  
task 'minjs', 'closure compile the javascript', ->
  exec 'java -jar "'+closure_compiler+'" --compilation_level SIMPLE_OPTIMIZATIONS --js js/lib/main.js  --js_output_file js/lib/main.min.js', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
  
task 'mincss', 'minify the css', ->
  exec "java -jar #{yui} -o css/lib/main.min.css css/src/main.css", (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
  
task 'minhtml', 'minify the html', ->
  exec "java -jar #{html_compressor} -o index.html index.src.html", (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'build', 'build the app', ->

task 'publish', 'publish the app', ->
  
