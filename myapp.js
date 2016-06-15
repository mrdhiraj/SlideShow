$(function () {
  
   var counter = $('#currSlide'),
        currSlide =  $("#slide-" + counter.data('currslide'));
   
  currSlide.fadeIn('slow');
   
   $(document).on('keyup', function (k) {
       var keycode = k.keyCode,
            totalSlides = $('.slides').length,
            next;
        if (keycode == 37) {
            next = -1;
        } else if (keycode == 39) {
            next = 1;
        } else {
            return;
        }
        
        var nextSlide = currSlide.data('slideid') + next;
        if (nextSlide < 1 || nextSlide > totalSlides) {
            console.log(currSlide);
            console.log('No more slides');
            return;
        } else {
            counter.data('currslide', nextSlide);
            counter.trigger('change');
        }
        
   });
   
   $('#currSlide').change(function () {
       currSlide = $("#slide-" + counter.data('currslide'));
       $('.slides').hide()
        currSlide.fadeIn('slow');
   });
});