$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  callbacks: {
    elementParse: function(item) {
      console.log(item.el[0].className);
      if(item.el[0].className == 'video') {
        item.type = 'iframe',
        item.iframe = {
           patterns: {
             youtube: {
               index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

               id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

               src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
             },
             vimeo: {
               index: 'vimeo.com/',
               id: '/',
               src: '//player.vimeo.com/video/%id%?autoplay=1'
             },
             gmaps: {
               index: '//maps.google.',
               src: '%id%&output=embed'
             }
           }
        }
      } else {
         item.type = 'image',
         item.tLoading = 'Loading image #%curr%...',
         item.mainClass = 'mfp-img-mobile',
         item.image = {
           tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
         }
      }

    }
  }
});