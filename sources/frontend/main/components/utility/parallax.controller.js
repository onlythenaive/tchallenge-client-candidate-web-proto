(function () {

  'use strict'

  angular
      .module('application.utility')
      .controller('parallaxController', [
        ParallaxController
      ]);


  function ParallaxController() {

    var jumboHeight = $('.jumbotron').outerHeight();

    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

    parallax();
  }
})();
