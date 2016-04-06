# grunt-styleguide-colors

> generate html markup for display project color variables

[![npm Package Version](https://img.shields.io/npm/v/grunt-styleguide-colors.svg?style=flat-square)](https://www.npmjs.com/package/grunt-styleguide-colors)
[![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](LICENSE)
[![Build Status](https://travis-ci.org/webdesignberlin/grunt-styleguide-colors.svg?branch=master)](https://travis-ci.org/webdesignberlin/grunt-styleguide-colors)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-styleguide-colors --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-styleguide-colors');
```

## The "styleguide_colors" task

### Overview
In your project's Gruntfile, add a section named `styleguide_colors` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  styleguide_colors: {
    options: {
      // Task-specific options go here (currently without options).
    },
    your_target: {
      // Target-specific file lists and/or options go here (currently without options).
    },
  },
});
```

### Options

Currently no Options

### Usage Examples

#### Basic Usage
Define a Source File with a scss Map like this:

```scss
/* <@colors */
$colors: (
    /// Color Black
    /// @group Colors
    /// @type Color
    'color-definition__black': #040d13,
    /// Color White
    /// @group Colors
    /// @type Color
    'color-definition__white': #ffffff,
    /// Color Gray
    /// @group Colors
    /// @type Color
    'color-definition__gray': #9e9e9e
);
/* colors@> */
```

`/* <@colors */` and `/* colors@> */` defines the start- and endpoint of the color map. 
Now you can add this Sourcefile to the Gruntfile Config and define an html Outputfile.

```js
grunt.initConfig({
  styleguide_colors: {
    options: {},
    files: {
      'test/app/templates/_sg-colors.html': ['test/app/styles/_variables.scss']
    }
  },
});
```

Now you can run the Script with `grunt styleguide_colors`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
