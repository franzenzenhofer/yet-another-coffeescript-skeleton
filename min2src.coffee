jsdom = require 'jsdom'
fs = require 'fs'

minHtmlReplace = (infile,outfile) ->
  jsdom.env({
   html: fs.readFileSync(infile),
   scripts: [
     'http://code.jquery.com/jquery-1.8.0.min.js'
   ],
   done: (errors, window) -> 
     $ = window.$;

     $('link').each((index, element) ->
       elem = @
       if $(elem).attr('min')
         console.log('link replace ')
         console.log('href="'+$(elem).attr('href')+'"')
         $(elem).attr('href', $(elem).attr('min'))
         console.log('with ')
         console.log('href="'+$(elem).attr('href')+'"')
         $(elem).removeAttr('min')
     
     )
     $('script').each((index, element) ->
       elem = @
       if $(elem).attr('min')
         console.log('script replace ')
         console.log('src="'+$(elem).attr('src')+'"')
         $(elem).attr('src', $(elem).attr('min'))
         console.log('with ')
         console.log('src="'+$(elem).attr('src')+'"')       
         $(elem).removeAttr('min')
     )
     source=window.document.doctype.toString()+window.document.innerHTML
     #console.log(source)
     fs.writeFile(outfile, source, (err) ->
       if err
         console.log(err)
       else
         console.log("index.html was saved")
     )
  })
minHtmlReplace('index.src.html', 'index.html')