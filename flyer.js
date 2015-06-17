jQuery(document).ready(function($) {

  $('.zone').on('dragenter',function(e) {
    $('.zone').addClass('hover');
  });

  $('.zone').on('dragleave',function(e) {
    $('.zone').removeClass('hover');
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
          $('.zone p').hide();
          $('.text').removeClass('hide');
        }
        img.src = event.target.result
      }
      reader.readAsDataURL(f)
 
    }
  }

  function onDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  $('.zone').on('dragover', onDragOver, false);
  $('.zone')[0].addEventListener('drop', onDrop, false);

  $('.invert').click(function(e) {
    $('.text').toggleClass('white');
  })

  $('.background').click(function(e) {
    $('.text').toggleClass('background');
    $('.text').toggleClass('white');
  })

  $('.alright').click(function(e) {
    $('.text').css('text-align','right');
  })

  $('.top').click(function(e) {
    $('.text').css('margin-top','0');
  })

  $('.bottom').click(function(e) {
    $('.text').css('margin-top','35%');
  })

  $('.alleft').click(function(e) {
    $('.text').css('text-align','left');
  })

  $('.text h1').click(function(e) {
    $('.text h1').html(prompt("Enter text:"));
  })

  $('.text h2').click(function(e) {
    $('.text h2').html(prompt("Enter text:"));
  })

});
