$(document).ready(function() {
  
  $('.header .text').on('click', function(){
    window.location.replace("/");
  });

  $('.option.logout').on('click', function(){
    $.ajax({
      type: 'get',
      url: '/authenticate/logout',
      success: function(){
        window.location.replace("/");
    }});
  });
});

