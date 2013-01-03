//todo css compression
//todo html compression

module.exports = function(grunt) {

  build_js_files = ['js/vendor/*.js','js/lib/*.js']
  grunt.initConfig({
 // lint: {
 //   all: ['js/vendor/jquery.bodysnatch.js', 'js/vendor/RequestAnimationFrame.js']
 // },
  concat: {
    js: {
      src: build_js_files,
      dest: 'js/lib/main.js'
    }
  },
  min: {
      js: {
        src: ['js/lib/main.js'],
        dest: 'js/lib/main.min.js'
      }
  }//,
  //TODO: get https://github.com/asciidisco/grunt-html html minification in a grunt plugin
  //htmlcompressor: {
  //  compile: {
  //    files: {
  //      'lib/*.html': 'src/+.html'
  //    },
  //    options: {
  //      type: 'html',
  //      preserveServerScript: true
  //    }
  //  }
  //}

  });
  grunt.registerTask('default', 'concat min');
  //grunt.registerTask('html', 'htmlcompressor');
  //grunt.loadNpmTasks('grunt-htmlcompressor');
  //grunt.registerTask('concat', 'concat');
  //grunt.registerTask('lint', 'lint');
};