module.exports = function(src, options) {

  var _ = require('lodash');

  // generate markup via color definition file(s)
  var typeObj = {
        blockRegex: /\/\*\s?<@colors*(\S*)(\n|\r|.)*?\s?colors@>\s?\*\//igm,
        mapItemRegex: /\'([a-z0-9-_]-*)+\':\s?#[a-fA-F0-9]{3,6}/g,
        html: function (key, value) {
          return _.template(options.html)({'key': key, 'value': value});
        }
      },
      html = '<!-- Generated via grunt-styleguide-colors -->\n<'+ options.wrapper +' class="sg-colors">\n',
      map,
      string;

  if(options.headline !== false){
    html += '<h1>' + options.headline + '</h1>\n'
  }

  map = src.match(typeObj.blockRegex)[0];
  map = map.match(typeObj.mapItemRegex);

  for(var i = 0, len = map.length; i < len; i += 1) {
    string = map[i].replace(/\s/g, '');
    string = string.split(':');

    html += typeObj.html(string[0], string[1]);
  }

  html += '</'+ options.wrapper +'>\n';

  return html;

};
