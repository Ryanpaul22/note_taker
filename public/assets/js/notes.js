$(document).ready(function(){

  $(".mark-complete").on("click", function() {

    // read id from button
    const noteId = $(this).attr("data-id");
    $.ajax({
      url: "/api/notes/" + noteId,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function () {

    // read id from button
    const noteId = $(this).attr("data-id");
    $.ajax({
      url: "/api/notes/" + noteId,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  })

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    // package up note
    const noteItem = {
      note: $("#note-input").val().trim()
    }

    $.ajax({
      url: "/api/notes",
      method: "POST",
      data: noteItem // req.body
    })
    .then(function(data) {
      location.reload();
    });
  });

});