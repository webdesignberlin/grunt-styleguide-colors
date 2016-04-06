module.exports = function(src) {

  // generate markup via color definition file(s)
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
