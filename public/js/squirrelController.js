var squirrelController = function(){
  var squirrelCache;

  var getSquirrels = function(){
    Squirrel.all(function(squirrels){
      squirrelCache = squirrels;
      squirrelsIndex.addSquirrels( squirrels );
      squirrelsIndex.wireEvents();
    });
  };

  var getSquirrel = function(id){
    var squirrel;
    Squirrel.find(id,function(squirrel){
      console.log(squirrel);
    });
  };

  var deleteSquirrel = function( id ){
    sqrl = $.grep(squirrelCache, function(e){ return e.id == id; })[0];
    sqrl.destroy(function(){
      squirrelsIndex.removeSquirrel(sqrl.id);     
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
