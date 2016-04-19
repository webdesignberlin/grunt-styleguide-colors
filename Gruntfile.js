/*
 * grunt-styleguide-colors
 * https://github.com/webdesignberlin/grunt-styleguide-colors
 *
 * Copyright (c) 2016 Michael Gerstmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/app/templates/_sg-colors.html']
    },

    // Configuration to be run (and then tested).
    styleguide_colors: {
      test: {
        options: {
          headline: 'Colors',
          wrapper: 'section',
          template: 'template.html'
        },
        files: {
          'test/app/templates/_sg-colors.html': ['test/app/styles/_variables.scss']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'styleguide_colors', 'nodeunit']);

  grunt.registerTask('doit', ['styleguide_colors']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
