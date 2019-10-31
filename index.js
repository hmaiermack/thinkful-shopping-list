function checkUncheckItem(){
    //watch for click on check button
    $(".shopping-list").on('click', '.shopping-item-toggle', function( event ){
      $(this).closest("li").children("span").toggleClass("shopping-item__checked");
    });
    //toggle check/unchecked class to object (default should be unchecked)
}

function removeItem(){
  $(".shopping-list").on('click', '.shopping-item-delete', function( event ){
    $(this).closest("li").remove();
  });
    //watch for click on delete button
    //remove element when clicked
}

function newItem(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();

    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });


  }
newItem();
checkUncheckItem();
removeItem();