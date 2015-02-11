function Squirrel(params) {

  this.id = params.id;
  this.name = params.name;
  this.tailLength = params.tailLength;
  this.treeMail = params.treeMail;

  this.nutCount = params.nuts;
  this.treeCount = params.trees;

}

Squirrel.prototype.update = function(){
  
  $.ajax({
    type    : 'put',
    url     : "/squirrels/"+ this.id  +"/update.json",
    data    : {name: this.name, tail_length: this.tailLength, tree_mail: this.treeMail},
    success : function(){ console.log('updated'); },
    error   : function(){ console.log('something went wrong');} 
  });

};

Squirrel.prototype.toJson = function(){
  return JSON.stringify( {name: this.name, tailLength: this.tailLength, treeMail: this.treeMail} );
};
