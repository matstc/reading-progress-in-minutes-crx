console.log('Reading progress enabled');

(function(){
  var display = document.createElement('div');
  display.style.backgroundColor = 'white';
  display.style.fontFamily = 'Ubuntu, Verdana, Sans-serif';
  display.style.opacity = '0.9';
  display.style.zIndex = 999;
  display.style.border = '1px solid #ccc';
  display.style.width = '140px';
  display.style.padding = '8px';
  display.style.position = 'fixed';
  display.style.borderRadius = '4px';
  display.style.fontSize = '16px';
  display.style.top = '10px'; 

  var metric = document.createElement('span');

  var closeButton = document.createElement('span');
  closeButton.innerHTML = "&#10006;";
  closeButton.style.cursor = 'pointer';
  closeButton.style.float = 'right';
  closeButton.style.color = '#666';
  closeButton.addEventListener('click', function(){display.style.display = 'none';});

  display.appendChild(metric);
  display.appendChild(closeButton);

  document.body.appendChild(display);

  var redraw = function(){
    display.style.left = window.innerWidth - 180 + 'px';
    var wordCount = document.body.innerText.split(" ").length;
    var wordsLeft = (1 - window.pageYOffset / document.body.scrollHeight) * wordCount;
    var minutesLeft = wordsLeft / 250;
    metric.innerHTML = Math.round(minutesLeft) + ' minutes left';
  };

  window.addEventListener('scroll', redraw);
  document.addEventListener('scroll', redraw);
  window.addEventListener('resize', redraw);
  redraw();
})();
