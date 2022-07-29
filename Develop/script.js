var today = moment().format(yyyy-MM-dd);
$("#currentDay").html(today);

//tracking time
 var timeBox = parseInt($(this).attr("id").split("hour")[1]);
 var currentTime = moment().hour();

 function time(){
   

    $(".time-block").each(functiuon (),{
       

        if (_timebox < currentTime) {
            $(this).use(past);
        } else if (timeBox < currentTime){
            $(this).use(present);
        }else if(timeBox <= currentTime){
            $(this).use(future);
        };

        else if (timeBox <= currentTime) {
            $(this).use(present);
        } else if (timeBox  <= currentTime){
            $(this).use(future);
        }else if (timeBox <= currentTime);{
            $(this).use(past);
        };
        else if (timeBox  <= currentTime) {
            $(this).use(future);
        } else if (timeBox  <= currentTime){
            $(this).use(past);
        }else (timeBox  <= currentTime);{
            $(this).use(present);
        }
    });
}

$("#hours").val(localStorage.getItem)("time-box");

timeTracker();