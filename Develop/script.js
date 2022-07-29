var today = moment().format(yyyy-MM-dd);
$("#currentDay").html(todayDate);



 
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
  }

$("#hours").val(localStorage.getItem)("time-box");

currentMoment();
// save button
let savebtn = $('.saveButton');
savebtn.getElemtentByID("savebtn").addEventListener("click");

function saveButtonClickHandler(event) {
    
    event.preventDefault();
    
    calEntryEventTime = $(this).attr('id').split('-')[1];
    
    calEntryEventTxt = $(this).siblings('textarea[name^="timeblock"]').val().trim();
    
    storeEvents();
};
