var navigation = function(){

  var logoutRoute = '/authenticate/logout';
  var logoutRedirect = '/';
  var logoutBtn = '.option.logout';

  var showSquirrelsRoute = '/squirrels';
  var showSquirrelsBtn = 'a#show-squirrels';


  var logout = function(){
    $.ajax({
      type: 'get',
      url: logoutRoute,
      success: function(){
        window.location.replace(logoutRedirect);
      }}); 
    };

  var showSquirrels = function(){
    window.location.replace(showSquirrelsRoute);
  };

  var init = function(){
    $(logoutBtn).on('click',logout);
    $(showSquirrelsBtn).on('click',showSquirrels);
  }

  return{
    init: init
  }

}();
