'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/


/**
 * options for tests
 *
 * @type {{separator: string, headline: string, wrapper: string, html: string -path to template}}
 */
var options = require('../options');


exports.styleguide_colors = {
  'does main file exist': function(test) {
    test.expect(1);
    var exists = true;

    try {
      var main = require('../tasks/styleguide_colors');
    } 
    catch(e) {
      exists = false;
    }

    test.ok(exists, 'main file not found and can not be required');

    test.done();
  },
  'is sccs file exists': function(test) {   
    test.expect(1);
    var result = true;
    try {
      var src = grunt.file.read('test/app/styles/_variables.scss');
    }
    catch(e) {
      result = false;
    }

    test.ok(result, 'the scss file can not be found or is empty');
    test.done();
  },
  'is sccs file content a string': function(test) {
    test.expect(1);

    var src = grunt.file.read('test/app/styles/_variables.scss');
    var result = true;
    try {  
       result = typeof src === 'string';
    }
    catch(e) {
      result = false;
    }

    test.ok(result, 'the scss file does not contain a string');
    test.done();
  },
  'does getmarkup(src, options) throw any errors': function(test) {
    test.expect(1);

    var getMarkup = require('../generatemarkup');
    var src = grunt.file.read('test/app/styles/_variables.scss');

    function validate() {
      try {
        getMarkup(src, options);
      }
      catch(e) {
        throw new Error(e);
      }
    }

    test.doesNotThrow(validate);
    test.done();
  },
  'does getMarkup(src, options) return a string': function(test) {
     test.expect(1);

     var getMarkup = require('../generatemarkup');
     var src = grunt.file.read('test/app/styles/_variables.scss');
     var html;
     var result;

    try {
         html = getMarkup(src, options);
     }
     catch(e) {
       result = false;
     }
     result = typeof html === 'string';

     test.ok(result, 'no output generated');
     test.done();
  }
};
