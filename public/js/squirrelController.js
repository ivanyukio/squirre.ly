var squirrelController = function(){
  
  var squirrels = [];

  var getSquirrels = function(){  
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
  };

  var putSquirrel = function(squirrel){
    $.ajax({
      type    : 'put',
      url     : "/squirrels/"+ squirrel.id  +"/update.json",
      data    : { name:        squirrel.name, 
                  tail_length: squirrel.tailLength, 
                  tree_mail:   squirrel.treeMail },
      success : function(){ console.log('updated'); },
      error   : function(){ console.log('something went wrong');} 
    });
  };
  
  return {
    index:  getSquirrels,
    update: putSquirrel,
    squirrels: squirrels
  }
}();
