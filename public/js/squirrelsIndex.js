squirrelsIndex = function(){

  var html = "" +
    "<div class='squirrel' data-squirrel-id='{id}'>" +
     "<div class='name'>" +
        "{name} " +
      "</div>" +
      "<div class='counts'>" +
        "<div class='item'>" +
          "<label>Nuts: </label>" +
          "<span class='value'>{nutCount}</span>" +
        "</div>" +
        "<div class='item'>" +
          "<label>Trees: </label>" +
          "<span class='value'>{treeCount}</span>" +
        "</div>" +
      "</div>" +
      "<div class='actions'>" +
        "<a class='btn' href='/squirrels/{id}/nuts'>nuts</a>" +
        "<a class='btn' href='/squirrels/{id}/trees'>trees</a>" +
        "<a id='delete' class='btn' href='#'>delete</a>" +
      "</div>" +
    "</div> ";

    var addSquirrel = function( squirrel ){
      html = html.replace(/{id}/g, squirrel.id);     
      html = html.replace(/{name}/g, squirrel.name);     
      html = html.replace(/{nutCount}/g, squirrel.nutCount);     
      html = html.replace(/{treeCount}/g, squirrel.treeCount);     
      
      $('.list-content').append( html );
    };


    return{ html         : html,
            addSquirrel  : addSquirrel
          }
    
}();
