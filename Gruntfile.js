module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    options: {
      separator: ';'
    },
    js: {
      src: ['js/src/main.js'],
      dest: 'js/lib/main.js'
    }
  },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      js: {
        src: 'js/src/main.js',
        dest: 'js/lib/main.min.js'
      }
    },
     htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'html/min/index.html': 'html/src/index.html'
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify', 'htmlmin']);

};