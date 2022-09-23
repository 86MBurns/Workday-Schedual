var today = moment().format(yyyy-MM-dd);
$("#currentDay").html(todayDate);
 


  $(document).ready(function () {
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".todos").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    
function currentMoment() {
    var timeCurrent = moment().hour();

    $(".time-block").each(function () {
      var containerTime = parseInt($(this).attr("id").split("hour")[1]);

      if (containerTime < timeCurrent) {
        $(this).removeClass("future");
       
        $(this).removeClass("present");
       
        $(this).addClass("past");
      } else if (blockTime === timeCurrent) {
        $(this).removeClass("past");
       
        $(this).removeClass("future");
       
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
       
        $(this).removeClass("past");
       
        $(this).addClass("future");
      }
    });
  }});
    $("#9am .todos").val(localStorage.getItem("9am"));
    $("#10am .todos").val(localStorage.getItem("10am"));
    $("#11am .todos").val(localStorage.getItem("11am"));
    $("#12pm .todos").val(localStorage.getItem("12pm"));
    $("#1pm .todos").val(localStorage.getItem("1pm"));
    $("#2pm .todos").val(localStorage.getItem("2pm"));
    $("#3pm .todos").val(localStorage.getItem("3pm"));
    $("#4pm .todos").val(localStorage.getItem("4pm"));
    $("#5pm .todos").val(localStorage.getItem("5pm"));
    
currentMoment();

});
