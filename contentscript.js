console.log('Reading progress indicator enabled');

(function(){
  var Timer = function(element){
    var timeout = null;

    var self = {
      show: function(){
        if (element.parentNode === null) return;

        window.clearTimeout(timeout);

        element.style.display = '';
        timeout = setTimeout(function(element){element.style.display = 'none';}, 1200, element);
      },
      remove: function(){
        element.parentNode.removeChild(element);
      },
      freeze: function(){
        window.clearTimeout(timeout);
      }
    };
    return self;
  };

  display = document.createElement('div');
  display.style.backgroundColor = 'white';
  display.style.fontFamily = 'Ubuntu, Verdana, Sans-serif';
  display.style.opacity = '0.85';
  display.style.zIndex = 999;
  display.style.width = '140px';
  display.style.padding = '8px';
  display.style.position = 'fixed';
  display.style.display = 'none';
  display.style.borderRadius = '4px';
  display.style.fontSize = '14px';

  var metric = document.createElement('span');

  var closeButton = document.createElement('span');
  closeButton.innerHTML = "&#10006;";
  closeButton.style.cursor = 'pointer';
  closeButton.style.float = 'right';
  closeButton.style.color = '#666';

  display.appendChild(metric);
  display.appendChild(closeButton);

  document.body.appendChild(display);

  var timer = new Timer(display);

  closeButton.addEventListener('click', timer.remove);
  display.addEventListener('mouseover', timer.freeze);
  display.addEventListener('mouseout', timer.show);

  var redraw = function(){
    display.style.left = window.innerWidth - 175 + 'px';
    display.style.top = window.innerHeight - 40 + 'px';
    var wordCount = document.body.innerText.split(" ").length;
    var wordsLeft = (1 - window.pageYOffset / document.body.scrollHeight) * wordCount;
    var minutesLeft = wordsLeft / 250;
    metric.innerHTML = Math.round(minutesLeft) + ' minutes left';
    timer.show();
  };

  window.addEventListener('scroll', redraw);
  document.addEventListener('scroll', redraw);
  window.addEventListener('resize', redraw);
})();
