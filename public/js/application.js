var squirrels = [];

$(document).ready(function() {

  $('.header .text').on('click', function(){
    window.location.replace("/");
  });
  
  if( $('#navigation').length ){
    navigation.init();
  }
  
  if( $('.list-content').length ){

    $.ajax({
      type    : "get",
      url     : "/squirrels.json",
      success : function(response){
        $.each(response, function(x,item){   
          squirrels.push( new Squirrel( item ));
        }); 
      },
      error   : function(){ console.log("Something Went Wrong");}
    });

  }
});



