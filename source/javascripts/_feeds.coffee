paths =
  dribbble: 'http://floating-summer-9664.herokuapp.com/dribbble'
  twitter:  'http://floating-summer-9664.herokuapp.com/twitter'


# paths =
#   dribbble: 'http://localhost:5000/dribbble'
#   twitter:  'http://localhost:5000/twitter'

data = {}

$.get paths.dribbble, (data) ->
  result = data
  result = result.shots
  random_shot = result[Math.round Math.random() * (result.length - 1)]
  container = $ '.dribbble-shot'
  teaser = container.find '.teaser'
  title = container.find '.title'
  teaser.append """
    <img src="#{random_shot.image_teaser_url}" />
    """
  title.text random_shot.title
  teaser.attr 'href', random_shot.url
  title.attr 'href', random_shot.url


$.get paths.twitter, (data) ->
  result = data
  result = result.splice 0, 5
  chunks = ""
  for item in result
    tweet = "#{item.text.substr(0, 50)}..."
    link = "http://twitter.com/jamesflorentino/status/#{item.id_str}"

    chunks +=
      """
      <li>
        <a href="#{link}" target="_blank">#{tweet}</a>
      </li>
      """
  $('.tweets ul').append chunks
