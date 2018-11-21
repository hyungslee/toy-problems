$(function () {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  var a = $('p').text().split(' ')
  // console.log(b)

  for (var i = 6; i < a.length / 2 - 4; i++) {
    var pTag = $('p').append('<span>' + a[i] + ' ' + '<span/>')
  }
})

function changergb () {
  var text = document.querySelectorAll('span')

  for (var i = 0; i < text.length; i++) {
    var r = Math.round(Math.random() * 255)
    var g = Math.round(Math.random() * 255)
    var b = Math.round(Math.random() * 255)

    var random_color = 'rgb(' + r + ',' + g + ',' + b + ')'

    text[i].style.color = random_color
  }
}

setInterval(function () {
  changergb()
}, 1000)
