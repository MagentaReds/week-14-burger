$(document).ready(function(){
  $("#submit-burger-form").on("submit", function(event){
    event.preventDefault();
    var myBurger = {
      burger_name: $("#burger-name-input").val().trim()
    };

    $.post("/", myBurger, function(){
      window.location.reload();
    });
  });
});