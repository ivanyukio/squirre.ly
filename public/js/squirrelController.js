var squirrelList;

var squirrelController = function(){

     Squirrel.all(function( squirrels ){
       squirrelList = squirrels;
     });
  
}();
