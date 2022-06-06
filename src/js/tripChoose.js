
$(function(){


    $('#dateBooking').daterangepicker({
        "showISOWeekNumbers": true,
        "showDropdowns": true,
        "alwaysShowCalendars": true,
        "opens": "center",
        "drops": "down",
        "minDate":new Date(),
    });
    $('#dateBooking').on('apply.daterangepicker', function(ev, picker) {
    console.log(picker.startDate.format('YYYY-MM-DD'));
    console.log(picker.endDate.format('YYYY-MM-DD'));
    // $('#beginDate').html(picker.startDate.format('YYYY-MM-DD'));
    // $('#endDate').html(picker.startDate.format('YYYY-MM-DD'));
    });



})