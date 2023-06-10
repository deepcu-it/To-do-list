$(document).ready(function() {
  var newDivCode = '<div class="new-div"> <form><input type="text" class="entertext"><input type="checkbox" class="chbox"><button class="savebtn btn btn-secondary">Save</button></form></div>';

  $('.btn1').click(function() {
    $('.table').append(newDivCode);
  });

  $('.table').on('click', '.savebtn', function() {
    var textValue = $(this).siblings('.entertext').val();
    var newDiv = $(this).closest('.new-div');
  
    if (textValue.length >= 1) {
      newDiv.empty();
      var savedDiv = $('<div>').addClass('saved-div');
      var textElement = $('<p>').text(textValue).addClass("saved-text").css("display","inline-block");
      var checkboxElement = $('<input>').attr('type', 'checkbox').addClass('chbox').css('display', 'inline-block');
      
      savedDiv.append(textElement, checkboxElement);
      newDiv.append(savedDiv);
    }
  });

  $('.remove').click(function() {
    $('.table .new-div:last-child').remove();
  });
  $(".resetlist").click(function(){
    $(".table .new-div").remove();
  });
});

