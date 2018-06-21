$(document).ready(function(){
  $('#new_comment_button').on("click", function() {
    $('#new_comment_button').replaceWith($('<form id="new_comment" name="new_comment"><textarea placeholder="comment" name="comment" required /><input id="authorName" name="author" placeholder="author" required /><input type="submit" value="Submit" /></form>'));
  });

  $('body').on("submit", "#new_comment", function(event) {
    event.preventDefault();
    var formData = $( this ).serializeArray();
    var comment  = formData[0].value;
    var author   = formData[1].value;

    console.log(formData);

    $('#comment_list').append('<li>'+`${comment}`+'<span class="author">'+author+'</span></li>');
  });
})
