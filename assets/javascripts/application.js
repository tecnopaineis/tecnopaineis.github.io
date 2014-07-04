jQuery(document).ready(function($) {
  new ContactBoxManager($('header.main a.contact'), $('header.main .contact-box'))
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