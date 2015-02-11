function Squirrel(params) {

  this.id = params.id;
  this.name = params.name;
  this.tailLength = params.tailLength;
  this.treeMail = params.treeMail;

  this.nutCount = params.nuts;
  this.treeCount = params.trees;

}

Squirrel.all = function(then){ 
  $.ajax({
    type    : "get",
    url     : "/squirrels.json",
    success : function(response){
      var squirrels = [];
      $.each(response, function(x,item){   
        squirrels.push( new Squirrel( item ));
      }); 

      then(squirrels);
    },
    error   : function(){ console.log("something went wrong in all");}
  });
};

Squirrel.find = function(id, then){
  $.ajax({
    type    : 'get',
    url     : "/squirrels/"+ id + '/show.json',
    success : function(response){ 
     var squirrel = new Squirrel( response ); 
     then(squirrel);
    },
    error   : function(){ console.log('something went wrong in save');} 
  });
};

Squirrel.create = function( params, then ){
  $.ajax({
    type    : 'post',
    url     : '/squirrels/create.json',
    data    : params,
    success : function( response ){
      var squirrel = new Squirrel( response );
      then( squirrel);
    },
    error   : function(){ console.log('something wen wrong in create');}
  });
};

Squirrel.prototype.save = function(then){
    $.ajax({
      type    : 'put',
      url     : "/squirrels/"+ this.id  +"/update.json",
      data    : { name:        this.name, 
                  tail_length: this.tailLength, 
                  tree_mail:   this.treeMail },
      success : function( response ){ 
                  var squirrel = new Squirrel( response );
                  then( squirrel );
                 },
      error   : function(){ console.log('something went wrong in save');} 
    });
};

Squirrel.prototype.destroy = function(then){
  $.ajax({
    type    : 'delete',
    url     : '/squirrels/' + this.id + '/destroy.json',
    success : function(){ then() },
    error   : function(){  console.log('delete went bad'); 
  }});
};



