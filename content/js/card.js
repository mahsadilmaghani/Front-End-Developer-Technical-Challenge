// Bug 3 fix - change color of heart icon to red on click
$( document ).ready(function() {
  $("path").click(function(){

    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    }
    else {
      $(this).addClass("on");
    }
  });


// Bug 4 fix - removing cards
  $(".delete").click(function(){ // restoring the closest card element into a variable by clicking on 'x' button on the card
    $("#myModal").css("display","block");
    var thisDel = $(this).parents().closest(".card");
    remove(thisDel);
  });

  function remove ($item) { // removing the stored variable by clicking on 'delete' button from the modal message
    console.log($item);
    $(".deleteModal").click(function(){
      $item.remove();
      $("#myModal").css("display","none");
    });
  };

  $(".closeModal").click(function(){ // closing the modal by clicking on 'x' button on the modal
    $("#myModal").css("display","none");
  });

  $(".cancelModal").click(function(){ // closing the modal by clicking on the 'cancel' button on the modal
    $("#myModal").css("display","none");
  });

});
