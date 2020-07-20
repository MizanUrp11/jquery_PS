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

  $("tr:odd").addClass("zebra");
  $("a.printPage").click(function () {
    window.print();
    return false;
  });

  var maxLength = 15;
  $("#textarea").keyup(function () {
    var textLen = maxLength - $(this).val().length;
    $("#rchars").text(textLen);
  });

  $('p').each(function(){
    var pdata = $(this);
    pdata.html( pdata.text().replace(/(^\w+)/,'<strong>$1</strong>') );
  });
});

function new_div() {
  $(document).ready(function() {
    var test = {
      id: "div",
      class: "divclass",
      css: {
        "color": "Green"
      }
    };
    var $div = $("<div>", test);
    $div.html("New Division");
    $("body").append($div);
  });
  }
