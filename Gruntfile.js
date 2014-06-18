module.exports = function (grunt) {

  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    meta: {
      pathJS: 'public/assets/js',
      pathJSBuild: 'public/build/js'
    },

    browserify: {
      dist: {
        files: {
          '<%= meta.pathJSBuild %>/app.js': ['<%= meta.pathJS %>/app.js']
        }
      }
    }

  });

  grunt.registerTask('default', ['browserify']);

};