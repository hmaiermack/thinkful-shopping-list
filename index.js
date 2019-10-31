function checkUncheckItem(){
    //watch for click on check button
    $(".shopping-item-toggle").click(function( event ){
      $(this).toggleClass("checked");
      document.getElementsByClassName('checked')[0].style.textDecoration = "line-through";
    });

    //toggle check/unchecked class to object (default should be unchecked)
    //if check === true add strikethrough to text
}

function removeItem(){
    //watch for click on delete button
    //remove element when clicked
}

checkUncheckItem();