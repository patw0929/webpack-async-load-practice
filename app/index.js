// require Node.js modules
require(['url', 'querystring'], function (url, qs) {
  var links = window.document.querySelectorAll("li > a");
  for (var i = 0, max = links.length; i < max; i++) {
    var parts = url.parse(links[i].href);
    parts.query = qs.parse(parts.query);
    console.log(parts);
  }
});

// include SCSS
require('../stylesheets/index.scss');

// include images
var cony = require('../images/cony.png');
var song = require('../images/son.png');
var img = window.document.createElement('img');
img.src = cony;
window.document.body.appendChild(img);

var img2 = window.document.createElement('img');
img2.src = song;
window.document.body.appendChild(img2);

// Dependencies
require(['blockui', 'jquery'], function (blockui, $) {
  $(".cony").on("click", function () {
    $.blockUI({
      'message': 'it works!'
    });
  });
});

// Only load on iPhone
if (/iPhone/ig.test(window.navigator.userAgent)) {
  require(['./iphone'], function (iphone) {
    alert(iphone.saying);
  });
}

