function Squirrel(params) {

  this.id = params.id;
  this.name = params.name;
  this.tailLength = params.tailLength;
  this.treeMail = params.treeMail;

  this.nutCount = params.nuts;
  this.treeCount = params.trees;

}

Squirrel.prototype.toJson = function(){
  return JSON.stringify( {name: this.name, tailLength: this.tailLength, treeMail: this.treeMail} );
};

Squirrel.prototype.save = function(){
    $.ajax({
      type    : 'put',
      url     : "/squirrels/"+ this.id  +"/update.json",
      data    : { name:        this.name, 
                  tail_length: this.tailLength, 
                  tree_mail:   this.treeMail },
      success : function(){ console.log('updated'); },
      error   : function(){ console.log('something went wrong');} 
    });
};


Squirrel.all = function( then, fail  ){
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
      error   : function(){ console.log("something went wrong");}
    });
}
