$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  var textArr =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  var a = textArr.split(" ");

  for (var j = 0; j < 1; j++) {
    $("div").append("<p></p>");
    $("div").append("<p></p>");
    for (var i = 0; i < a.length; i++) {
      $("p").append("<span>" + a[i] + " " + "<span/>");
    }
  }
});

function changergb() {
  var text = document.querySelectorAll("span");

  for (var i = 0; i < text.length; i++) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);

    var random_color = "rgb(" + r + "," + g + "," + b + ")";

    text[i].style.color = random_color;
  }
}

setInterval(function() {
  changergb();
}, 1000);
