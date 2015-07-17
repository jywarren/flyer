jQuery(document).ready(function($) {

  $('.zone').on('dragenter',function(e) {
    $('.zone').addClass('hover');
  });

  $('.zone').on('dragleave',function(e) {
    $('.zone').removeClass('hover');
  });

  var canvas = new fabric.Canvas('c',{ width: $(window).width(),
                                       height: $(window).height()
  });

  var onDrop = function(e) {
    e.preventDefault();
    e.stopPropagation(); // stops the browser from redirecting.

    var files = e.dataTransfer.files;
    for (var i = 0, f; f = files[i]; i++) {
      // Read the File objects in this FileList.

      reader = new FileReader()
      reader.onload = function(e) {
        img = new Image()
        img.onload = function() {
          $('body').css('background','url("'+this.src+'")');
          $('body').css('background-size','100%');
          $('.zone').css('background','none');
          $('.zone').css('border','none');
          $('.text').removeClass('hide');
          $('.zone').hide();
        }

        img.src = event.target.result
      }
      reader.readAsDataURL(f);
 
    }
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  $('.zone').on('dragover', onDragOver, false);
  $('.zone')[0].addEventListener('drop', onDrop, false);

  $('.brightness').click(function(e) {
    img = fabric.Image.fromURL(img.src, function(img) {
      var width = $(window).width(),
          height = $(window).height();

      img.scale(width/img.width); // set({ left: 50, top: 100, angle: -15 })

      img.filters.push(
        new fabric.Image.filters.Brightness({ brightness: 30 }));
      img.applyFilters(canvas.renderAll.bind(canvas));

      canvas.add(img);

      $('.canvas-container').show();
    });
  });

  $('.invert').click(function(e) {
    $('.text').toggleClass('white');
  });

  $('.background').click(function(e) {
    $('.text').toggleClass('background');
    $('.text').toggleClass('white');
  });

  $('.alright').click(function(e) {
    $('.text').css('text-align','right');
  });

  $('.top').click(function(e) {
    $('.text').css('margin-top','0');
  });

  $('.bottom').click(function(e) {
    $('.text').css('margin-top','35%');
  });

  $('.alleft').click(function(e) {
    $('.text').css('text-align','left');
  });

  $('.text h1').dblclick(function(e) {
    $('.text h1').html(prompt("Enter text:",$('.text h1').html()));
  });

  $('.text h2').dblclick(function(e) {
    $('.text h2').html(prompt("Enter text:",$('.text h2').html()));
  });

  $('.text').draggable();

  $('.shadow').click(function(e) {
    $('.text').toggleClass('shadow');
  });

});
