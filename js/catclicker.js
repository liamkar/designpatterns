$(document).ready(function(){
  let clickCounter = 0;
  $('#cat').click(function(e) {
    clickCounter++;
    $('#clickcount').text(clickCounter);
    console.log('image clicked');
  });
});
