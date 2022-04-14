var hour = moment().format('dddd, MMMM Do YYYY, h:mm:ss a'); 
var current = $('#currentDay')
$(document).ready(function(){
current.text(hour);
});




// Do I need this section?
// var minute = moment().format('LT');
// var time = $('#timer')
// $(document).ready(function(){
// time.text(minute);
// });

var container = document.getElementById("container")
var row = document.getElementsByClassName("gridRow");

$("#currentDay").html(current );
$(document).ready(function () {

$(".saveBtn").on("click", function () {
    var note = $(this).siblings(".memo").val();
    var time = $(this).parent().attr("id");
        localStorage.setItem(time, note);
         })
   
function timeLog() {
  var currentTime = moment().hour();
    $(".time-slot").each(function () {
  var timeSlot = parseInt($(this).attr("id").split("hour")[1]);

            if (timeSlot < currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            else if (timeSlot === currentTime) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    $("#9:00am .description").val(localStorage.getItem("9o'clock"));
    $("#10:00am .description").val(localStorage.getItem("10o'clock"));
    $("#11:00am .description").val(localStorage.getItem("11o'clock"));
    $("#12:00pm .description").val(localStorage.getItem("12o'clock"));
    $("#1:00ppm .description").val(localStorage.getItem("1o'clock"));
    $("#2:00pm .description").val(localStorage.getItem("2o'clock"));
    $("#3:00pm .description").val(localStorage.getItem("3o'clock"));
    $("#4:00pm .description").val(localStorage.getItem("4o'clock"));
    $("#5:00pm .description").val(localStorage.getItem("5o'clock"));
  

    timeLog();
})



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!for reference only below line !!!!!!!!!!!!!!!!!!!!!!!!!!


// Use Moment.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
// var today = moment();
// $("#1a").text(today.format("MMM Do, YYYY"));


// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
// var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
// $("#3a").text(reformatDate);



