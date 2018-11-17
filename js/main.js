$(document).ready(function(){

  //function to hide divs
  function hideAll() {
    $('#dreams').hide();
    $('#landslide').hide();
    $('#gypsy').hide();
    $('#sevenWonders').hide();
  }

  //immediately hide everything
  hideAll();

  //when any album cover is clicked, make the audio player and title appear
  $('.albumCover').click(function() {
    //hide everything again
    hideAll();

    //turn on player based on album clicked
    switch($(this).attr("id")) {
      case "rumours":
        $('#dreams').show();
        break;
      case "fleetwoodMac":
        $('#landslide').show();
        break;
      case "mirage":
        $('#gypsy').show();
        break;
      case "tangoNight":
        $('#sevenWonders').show();
        break;
    }

    //keeps more than one player from playing at same time
    $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
    });


  }); //end of click function

  $('#bandInfo').hide();

  $('#bandPic').click(function() {
    $('#bandInfo').slideToggle();
  });

});
