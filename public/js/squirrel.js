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
