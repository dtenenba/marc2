console.log("hello from demo.j2");

$(document).ready( function () {


$("#select_all_rows").click(function() {
    alert("sar");
});


$("#deselect_all_rows").click(function() {
    $("#mytable tr").removeClass("row_selected");
});

$("#send_to_r").click(function() {
    console.log("you clicked send to r");
});



$('#mytable').on('click', "tr", function() {
        //alert("you clicked! and text is " + $(this).text());
        console.log("you clicked");

        $(this).toggleClass('row_selected');
    } );


} );

