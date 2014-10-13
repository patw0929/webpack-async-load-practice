var content = require('./content.js');
document.write(content);

var current_file = window.location.pathname.split("/").pop();

if (current_file == "index.html") {
  require.ensure([], function () {
    require('./index').show();
  });
} else if (current_file == "two.html") {
  require.ensure([], function () {
    require('./two').show();
  });
}
