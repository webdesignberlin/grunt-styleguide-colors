# grunt-styleguide-colors

> generate html markup to display a scss color map 

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
      // Task-specific options go here
      // All options are optional - see Options below
    },
    files: {
        dest: src 
    }
    
  }
});
```

### Options

```js
options: {
  headline: string, // set to false to disable headline
  wrapper: string // section, article, div, ...
  template: string // path to your custom template.html
}
```

### Usage Examples

#### Basic Usage
Define a source file with a scss map like this:

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

`/* <@colors */` and `/* colors@> */` define the start- and endpoint of the color map. 
Add the source file to the Gruntfile config and define an html output file. For an example of a [template html](template.html) file have a look at template.html in the module folder.

```js
grunt.initConfig({
  styleguide_colors: {
    options: {
      headline: 'All my colors',
      wrapper: 'section',
      template: 'template.html'
    },
    files: {
      'test/app/templates/_sg-colors.html': ['test/app/styles/_variables.scss']
    }
  },
});
```

Run the Script with `grunt styleguide_colors`

The generated output:

```html
<!-- Generated via grunt-styleguide-colors -->
<section class="sg-colors">
<h1>All my colors</h1>
    <div class="sg-colors__definition">
        <div class="sg-colors__item" style="background: #040d13;"></div>
        <b>'color-definition__black':</b> #040d13
    </div>
    <div class="sg-colors__definition">
        <div class="sg-colors__item" style="background: #ffffff;"></div>
        <b>'color-definition__white':</b> #ffffff
    </div>
    <div class="sg-colors__definition">
        <div class="sg-colors__item" style="background: #9e9e9e;"></div>
        <b>'color-definition__gray':</b> #9e9e9e
    </div>
    <div class="sg-colors__definition">
        <div class="sg-colors__item" style="background: #ebeef2;"></div>
        <b>'color-definition__gray--light':</b> #ebeef2
    </div>
    <div class="sg-colors__definition">
        <div class="sg-colors__item" style="background: #292929;"></div>
        <b>'color-definition__gray--dark':</b> #292929
    </div>
    <div class="sg-colors__definition">
        <div class="sg-colors__item" style="background: #00a2db;"></div>
        <b>'color-definition__blue':</b> #00a2db
    </div>
</section>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
