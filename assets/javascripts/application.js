jQuery(document).ready(function($) {
  new ContactBoxManager($('header.main a.contact'), $('header.main .contact-box'));

  var $galleryImages = $('.gallery-images li a');
  if($galleryImages[0]){
    $galleryImages.fancybox({
      maxWidth  : 800,
      maxHeight : 600,
      fitToView : false,
      width   : '70%',
      height    : '70%',
      autoSize  : false,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });
  }
});

var ContactBoxManager = function($openBnt, $box){
  var _this = this;
  this.$openBnt  = $openBnt;
  this.$box      = $box;

  this.startup = function(){
    $('header.main').on('click', 'a.contact', function(event) {
      event.preventDefault();
      
      _this.open();
    });

    $box.on('click', 'a.close', function(event) {
      event.preventDefault();
      
      _this.close();
    });
  },

  this.open = function(){
    this.$box.addClass('openned');
  },

  this.close = function(){
    this.$box.removeClass('openned');
  },

  this.startup();
}