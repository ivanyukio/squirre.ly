var squirrels = [];

$(document).ready(function() {

  $('.header .text').on('click', function(){
    window.location.replace("/");
  });
  
  if( $('#navigation').length ){
    navigation.init();
  }
});



