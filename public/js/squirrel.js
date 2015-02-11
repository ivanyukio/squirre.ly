function Squirrel(params) {

  this.id = params.id;
  this.name = params.name;
  this.tailLength = params.tailLength;
  this.treeMail = params.treeMail;

  this.nutCount = params.nuts;
  this.treeCount = params.trees;

}

Squirrel.all = function(){ 
  $.ajax({
    type    : "get",
    url     : "/squirrels.json",
    success : function(response){
      var squirrels = [];
      $.each(response, function(x,item){   
        squirrels.push( new Squirrel( item ));
      }); 
      console.log(squirrels);
    },
    error   : function(){ console.log("something went wrong in all");}
  });
};

Squirrel.find = function(id){
  $.ajax({
    type    : 'get',
    url     : "/squirrels/"+ id + '/show.json',
    success : function(response){ 
     var squirrel = new Squirrel( response ); 
     console.log( squirrel );
    },
    error   : function(){ console.log('something went wrong in save');} 
  });
};

Squirrel.prototype.save = function(){
    $.ajax({
      type    : 'put',
      url     : "/squirrels/"+ this.id  +"/update.json",
      data    : { name:        this.name, 
                  tail_length: this.tailLength, 
                  tree_mail:   this.treeMail },
      success : function(){ console.log('updated'); },
      error   : function(){ console.log('something went wrong in save');} 
    });
};

Squirrel.prototype.destroy = function(){
  $.ajax({
    type    : 'delete',
    url     : '/squirrels/' + this.id + '/destroy.json',
    success : function(){ console.log('deleted'); },
    error   : function(){  console.log('delete went bad'); }
  });
};



