$(document).ready(function () {
  //Go to Top
  $("a[href='#top']").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  //Disable right click menu option
  $(document).bind("contextmenu", function () {
    return false;
  });

  //Disable/enable the form submit button

  $("#accept").click(function () {
    if ($("#submitBtn").is(":disabled")) {
      $("#submitBtn").removeAttr("disabled");
    } else {
      $("#submitBtn").attr("disabled", "disabled");
    }
  });

  function blinkText() {
    $(".blink").fadeOut(500);
    $(".blink").fadeIn(500);
  }
  setInterval(blinkText, 1000);
});
