var options = {
  separator: ',',
  headline: 'Colors',
  wrapper: 'section',
  html:
`   <div class="sg-colors__definition">
      <div class="sg-colors__item" style="background: <%= value %>;"></div>
      <b><%= key %>:</b> <%= value %>
   </div>
`
};

module.exports = options;