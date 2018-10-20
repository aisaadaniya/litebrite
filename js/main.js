function main() {
  var colorClass = '';
  var blink;
  $('.select-color').on('click', function() {
    var selectedColor = $(this).attr('class')
    switch (selectedColor) {
      case 'select-color cyan not-selected':
      colorClass = 'cyan';
      break;
      case 'select-color yellow not-selected':
      colorClass = 'yellow';
      break;
      case 'select-color magenta not-selected':
      colorClass = 'magenta';
      break;
    }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });

  $('.box').on('click', function() {
    $(this).toggleClass(colorClass);
  });

  $('.toggle-blink').on('click', function() {
    if (colorClass) {
      $('.toggle-blink').toggleClass('opacity');
      if ($(this).hasClass('opacity')) {
        blink = setInterval(function() { $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
      }, 350);
    } else {
      clearInterval(blink);
    }
  }
});

  $('.reset').on('click', function() {
    window.location.reload();
  });

}

$(document).ready(main);
