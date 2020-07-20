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

  $("p").each(function () {
    var pdata = $(this);
    pdata.html(pdata.text().replace(/(^\w+)/, "<strong>$1</strong>"));
  });
});

function new_div() {
  $(document).ready(function () {
    var test = {
      id: "div",
      class: "divclass",
      css: {
        color: "Green",
      },
    };
    var $div = $("<div>", test);
    $div.html("New Division");
    $("body").append($div);
  });
}

function moveButton(elem) {
  if ($(elem).parent().attr("id") == "nonselected") {
    $(elem).detach().appendTo("#selected");
  } else {
    $(elem).detach().appendTo("#nonselected");
  }
}

$(document).ready(function () {
  var colors = { color1: "Red", color2: "Green", color3: "Blue" };
  $.each(colors, function (key, value) {
    $("#divSelect").append(
      $("<option/>", {
        value: key,
        text: value,
      })
    );
  });
});

function new_element() {
  $("#header ul").append("<li>Java</li>");
}

function Remove_options() {
  $("#myColor")
    .empty()
    .append('<option selected="selected" value="test">White</option>');
}

$(document).ready(function () {
  $("#underLine").each(function () {
    var text_words = $(this).text().split(" ");

    $(this)
      .empty()
      .html(function () {
        for (i = 0; i < text_words.length; i++) {
          if (i === 0) {
            $(this).append("<span>" + text_words[i] + "</span>");
          } else {
            $(this).append(" <span>" + text_words[i] + "</span>");
          }
        }
      });
  });
});
