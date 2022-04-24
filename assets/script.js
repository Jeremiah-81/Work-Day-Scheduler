var hour = moment().format('dddd, MMMM Do YYYY, HH:mm:ss'); 
var current = $('#currentDay')
var time = "15:00:00";
moment("15", "hh").format('LT') 
$(document).ready(function(){
current.text(hour);
});
$("currentDay").html(hour);








// changed time to military time for higher value 

moment("15", "hh").format('LT') 
var formatted = moment(time, "HH:mm:ss").format("LT");











// var container = document.getElementById("container")
// var row = document.getElementsByClassName("gridRow");
 $(document).ready(function () {


$(".saveBtn").on("click", function () {
    var note = $(this).siblings(".memo").val();
    var time = $(this).parent().attr("id");
       
    
  //save note in locat storage for later use  

    localStorage.setItem(time, note);
         })

function timeSlot() {
//change time to militery time to evaluate ther value.
// change attr id and change moment too!!!!!
  var currentTime = moment().format("h"); 
    $(".time-slot").each(function () {
  var timeSlot = parseInt($(this).attr("id").split("hour")[0]);
  
  // console.log(timeSlot, currentTime[0]);

            if (timeSlot <  parseInt (currentTime)) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeSlot === parseInt(currentTime)) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }


    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));
          
    timeSlot();
})



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!for reference only below line !!!!!!!!!!!!!!!!!!!!!!!!!!


// console.log(formatted); 




// Use Moment.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
// var today = moment();
// $("#1a").text(today.format("MMM Do, YYYY"));
 

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
// var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
// $("#3a").text(reformatDate);

//$("#currentDay").html(current );


// Do I need this section?
// var minute = moment().format('LT');
// var time = $('#timer')
// $(document).ready(function(){
// time.text(minute);
// });