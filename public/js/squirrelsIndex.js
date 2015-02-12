squirrelsIndex = function(){

  var html = "" +
    "<div class='squirrel' data-squirrel-id='{id}'>" +
     "<div class='name'>" +
        "{name} " +
      "</div>" +
      "<div class='counts'>" +
        "<div class='item'>" +
          "<label>Nuts:</label>" +
          "<span class='value'>{nut_count}</span>" +
        "</div>" +
        "<div class='item'>" +
          "<label>Trees:</label>" +
          "<span class='value'>{tree_count}</span>" +
        "</div>" +
      "</div>" +
      "<div class='actions'>" +
        "<a class='btn' href='/squirrels/{id}/nuts'>nuts</a>" +
        "<a class='btn' href='/squirrels/{id}/trees'>trees</a>" +
        "<a id='delete' class='btn' href='#'>delete</a>" +
      "</div>" +
    "</div> ";

    return{ html: html}
}();
