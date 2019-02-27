$(document).ready(function(){

  
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
        url: "/api/note",
        method: "POST",
        data: noteItem // req.body
      })
      .then(function(data) {
        location.reload();
      });
    });
  
  });