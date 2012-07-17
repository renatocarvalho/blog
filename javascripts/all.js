(function() {
  var data, paths;

  paths = {
    dribbble: 'http://floating-summer-9664.herokuapp.com/dribbble',
    twitter: 'http://floating-summer-9664.herokuapp.com/twitter'
  };

  data = {};

  $.get(paths.dribbble, function(result) {
    var container, random_shot, teaser, title;
    result = JSON.parse(result);
    result = result.shots;
    random_shot = result[Math.round(Math.random() * (result.length - 1))];
    container = $('.dribbble-shot');
    teaser = container.find('.teaser');
    title = container.find('.title');
    teaser.append("<img src=\"" + random_shot.image_teaser_url + "\" />");
    title.text(random_shot.title);
    teaser.attr('href', random_shot.url);
    return title.attr('href', random_shot.url);
  });

  $.get(paths.twitter, function(result) {
    var chunks, item, link, tweet, _i, _len;
    result = JSON.parse(result);
    result = result.splice(0, 5);
    chunks = "";
    for (_i = 0, _len = result.length; _i < _len; _i++) {
      item = result[_i];
      tweet = "" + (item.text.substr(0, 50)) + "...";
      link = "http://twitter.com/jamesflorentino/statuses/" + item.id;
      chunks += "<li>\n  <a href=\"" + link + "\" target=\"_blank\">" + tweet + "</a>\n</li>";
    }
    return $('.tweets ul').append(chunks);
  });

}).call(this);
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-6984974-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
(function() {



}).call(this);
