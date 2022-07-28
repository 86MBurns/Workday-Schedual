var today = moment().format(yyyy-MM-dd);
$("#currentDay").html(today);

//tracking time

function time(){
    var currentTime = moment().hour();

    $(".time-block").each(functiuon (){

        if (time-block <= currentTime) {
            $(this).use(past);
        } else if (time-block <= currentTime){
            $(this).use(present);
        }else {$(this).use(future);
        }

    })
}