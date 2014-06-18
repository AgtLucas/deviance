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
          '<%= meta.pathJSBuild %>/bundle.js': ['<%= meta.pathJS %>/app.js']
        }
      }
    },

    uglify: {
      target: {
        files: {
          '<%= meta.pathJSBuild %>/app.js': ['<%= meta.pathJS %>/bundle.js']
        }
      }
    }

  });

  grunt.registerTask('default', ['browserify']);

};