squirrelsIndex = function(){

  var html = "" +
    "<div class='squirrel' data-squirrel-id='7'>" +
     "<div class='name'>" +
        "<%= squirrel.name %> " +
      "</div>" +
      "<div class='counts'>" +
        "<div class='item'>" +
          "<label>Nuts:</label>" +
          "<span class='value'>  <%= squirrel.nut_count %></span>" +
        "</div>" +
        "<div class='item'>" +
          "<label>Trees:</label>" +
          "<span class='value'><%= squirrel.tree_count %></span>" +
        "</div>" +
      "</div>" +
      "<div class='actions'>" +
        "<a class='btn' href='/squirrels/<%= squirrel.id %>/nuts'>nuts</a>" +
        "<a class='btn' href='/squirrels/<%= squirrel.id %>/trees'>trees</a>" +
        "<a id='delete' class='btn' href='#'>delete</a>" +
      "</div>" +
    "</div> ";

    
     
    return{ html: html}
}();
