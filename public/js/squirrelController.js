var squirrelController = function(){

  var getSquirrels = function(){
    Squirrel.all(function(squirrels){
      console.log(squirrels);
    });
  };

  var getSquirrel = function(id){
    var squirrel;
    Squirrel.find(id,function(squirrel){
      console.log(squirrel);
    });
  };

  var deleteSquirrel = function( squirrel ){
    squirrel.destroy(function(){
      console.log(squirrel.name + ": Deleted");
    });  
  }

  var updateSquirrel = function( squirrel ){
    squirrel = new Squirrel(param);
    squirrel.save(function(id){
      squirrel.id = id;    
      console.log(squirrel);
    });
  }

  var createSquirrel = function( params ){
    Squirrel.create( params, function(squirrel){
      console.log(squirrel); 
    });
  };
  
  return{
    index:    getSquirrels,
    show:     getSquirrel,
    destroy:  deleteSquirrel
  }

}();
