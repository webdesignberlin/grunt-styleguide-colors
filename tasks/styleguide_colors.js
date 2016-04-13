/*
 * grunt-styleguide-colors
 * https://github.com/webdesignberlin/grunt-styleguide-colors
 *
 * Copyright (c) 2016 Michael Gerstmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // generate markup via color definition file(s)
  var getMarkup = require('../generatemarkup');
  var defaultOptions = require('../options');
  
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('styleguide_colors', 'generate html markup for display project color variables', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options(defaultOptions);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Write the destination file.
      grunt.file.write(f.dest, getMarkup(src, options));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
