$(function () {

  var jumboHeight = $('.jumbotron').outerHeight();

  function parallax(){
      var scrolled = $(window).scrollTop();
      $('.bg').css('height', (jumboHeight-scrolled) + 'px');
  }

  $(window).scroll(function(e){
      parallax();
  });

  parallax();

  console.log("jQuery is available");

  $('#getPrize').on('click', function () {
    $('html, body').animate({ scrollTop: $('#candidateFirstname').offset().top }, 500);
    $('#candidateFirstname').focus();
  });

  $('#registerForChallenge').on('click', function () {
    window.location.href = 'static/views/candidate-workbook.html';
  });
});
