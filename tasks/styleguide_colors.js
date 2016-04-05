/*
 * grunt-styleguide-colors
 * https://github.com/webdesignberlin/grunt-styleguide-colors
 *
 * Copyright (c) 2016 Michael Gerstmann
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('styleguide_colors', 'generate html markup for display project color variables', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

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


      // generate markup via color definition file(s)
      var getMarkup = function () {
        var typeObj = {
              blockRegex: /\/\*\s?<@colors*(\S*)(\n|\r|.)*?\s?colors@>\s?\*\//igm,
              mapItemRegex: /\'([a-z0-9-_]-*)+\':\s?#[a-fA-F0-9]{3,6}/g,
              html: function (key, value) {
                return '\t<div class="sg-colors__definition">\n' +
                    '\t\t<div class="sg-colors__item" style="background: ' + value + ';">' +
                    '\t\t</div>\n' +
                    '\t\t<b>' + key + ':</b> ' + value + '\n' +
                    '\t</div>\n';
              }
            },
            html = '<!-- Generated via command line: grunt styleguide_colors -->\n<section class="sg-colors">\n<h1>Colors</h1>\n',
            map,
            string;

        map = src.match(typeObj.blockRegex)[0];
        map = map.match(typeObj.mapItemRegex);


        for(var i = 0, len = map.length; i < len; i += 1) {
          string = map[i].replace(/\s/g, '');
          string = string.split(':');

          html += typeObj.html(string[0], string[1]);
        }


        html += '</section>\n';


        return html;
      };

      // Handle options.
      src += options.punctuation;

      // Write the destination file with generated html.
      grunt.file.write(f.dest, getMarkup());


      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
