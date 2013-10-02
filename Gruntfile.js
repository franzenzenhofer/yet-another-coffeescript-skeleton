/*global module:false*/
module.exports = function(grunt) {
  var packagejson = grunt.file.readJSON('package.json');
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: packagejson,
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - last build: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      coffee: {
        options: {banner: '# <%= banner %>'},
        src: packagejson.coffeesrc,
        dest: '<%= pkg.temp %>concat/<%= pkg.name %>.coffee'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: true,
        compress: false, //compress must be false, otherwise behaviour change!!!!!
        beautify: false
      },
      dist: {
        src: '<%= coffee.build.dest %>',
        dest: '<%= pkg.buildto %><%= pkg.name %>-complete.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }//,
      //coffee: {
      //  src: 'js/temp/*.js'
      //}//,
      //lib_test: {
      //  src: ['lib/**/*.js', 'test/**/*.js']
      //}
    },
    //qunit: {
    //  files: ['test/**/*.html']
    //},
    coffee: {
      options: {
        bare:false
      },
      singlescompile: {
        expand: true,
        cwd: 'js/coffee',
        src: ['*.coffee'],
        dest: '<%= pkg.singles %>',
        ext: '.js'
        },
      build: {
        src: '<%= concat.coffee.dest %>',
        dest: '<%= pkg.buildto %><%= pkg.name %>-complete.js'
      }
     },
    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'html/min/index.html': 'html/src/index.html',     // 'destination': 'source'
        'html/min/test.html': 'html/src/test.html' 
        }
      }
    },
    cssmin: {
  compress: {
    files: {
      'css/lib/main.min.css': ['css/src/main.css']
      }
    }
  },
   copy: {
  css: {
    files: {
      'css/lib/main.css': ['css/src/main.css']
      }
    }
  },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      coffeefiles: {
        files: packagejson.coffeesrc,
        tasks: ['concat:coffee','coffee', 'uglify']
      },
      htmlmin: {
        files: "html/src/index.html",
        tasks: ['htmlmin']
      },
      cssmin: {
        files: "css/src/main.css",
        tasks: ['cssmin', 'copy:css']
      }//,
      //lib_test: {
      //  files: '<%= jshint.lib_test.src %>',
      //  tasks: ['jshint:lib_test', 'qunit']
      //}
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  //grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);
  grunt.registerTask('default', ['concat:coffee', 'coffee', 'jshint', 'uglify', 'watch']);

};
