(function(){var e,t;t={dribbble:"http://floating-summer-9664.herokuapp.com/dribbble",twitter:"http://floating-summer-9664.herokuapp.com/twitter"},e={},$.get(t.dribbble,function(e){var t,n,r,i;return e=JSON.parse(e),e=e.shots,n=e[Math.round(Math.random()*(e.length-1))],t=$(".dribbble-shot"),r=t.find(".teaser"),i=t.find(".title"),r.append('<img src="'+n.image_teaser_url+'" />'),i.text(n.title),r.attr("href",n.url),i.attr("href",n.url)}),$.get(t.twitter,function(e){var t,n,r,i,s,o;e=JSON.parse(e),e=e.splice(0,5),t="";for(s=0,o=e.length;s<o;s++)n=e[s],i=""+n.text.substr(0,50)+"...",r="http://twitter.com/jamesflorentino/statuses/"+n.id,t+='<li>\n  <a href="'+r+'" target="_blank">'+i+"</a>\n</li>";return $(".tweets ul").append(t)})}).call(this);var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-6984974-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(){}.call(this);