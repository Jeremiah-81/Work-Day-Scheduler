// changed time to military time for higher value.
var hour = moment().format("MMMM Do YYYY, h:mm:ss a");
var current = $("#currentDay");
var time = "15:00:00";
moment("15", "hh").format("LT");
$(document).ready(function () {
  console.log(localStorage.getItem("hr15"))

  // This is for storing information in the console in real time.
  for (let i = 9; i<= 17; i++) {
    $(`#h${i}`).siblings(`.memo`).val(localStorage.getItem(`h${i}`));
    console.log($(`#h${i}`))
  }

  current.text(hour);
});

$("currentDay").html(hour);

//this is where we save our items in locat storage for future use.
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var note = $(this).siblings(".memo").val();
    var time = $(this).parent().attr("id");

   console.log(localStorage.getItem("hr15"))

    localStorage.setItem(time, note);
    // localStorage.getItem(note);
  });


  function timeSlot() {
    
    // This keeps track of the timeline on whats happening in real time.
    var currentTime = moment().format("HH");
    $(".time-slot").each(function () {
      var timeSlot = Number($(this).attr("id").substring(1));
      console.log(timeSlot);
      console.log(currentTime);

      if (timeSlot < parseInt(currentTime)) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeSlot === parseInt(currentTime)) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  $("#h9 .memo").val(localStorage.getItem("h9"));
  $("#h10 .memo").val(localStorage.getItem("h10"));
  $("#h11 .memo").val(localStorage.getItem("h11"));
  $("#h12 .memo").val(localStorage.getItem("h12"));
  $("#h13 .memo").val(localStorage.getItem("h13"));
  $("#h14 .memo").val(localStorage.getItem("h14"));
  $("#h15 .memo").val(localStorage.getItem("h15"));
  $("#h16 .memo").val(localStorage.getItem("h16"));
  $("#h17 .memo").val(localStorage.getItem("h17"));

  timeSlot();
});
