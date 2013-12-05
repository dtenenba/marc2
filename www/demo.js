console.log("hello from demo.j2");


function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

$(document).ready( function () {


$("#select_all_rows").click(function() {
    $("#mytable tbody tr").addClass("row_selected");
});


$("#deselect_all_rows").click(function() {
    $("#mytable tbody tr").removeClass("row_selected");
});

$("#send_to_r").click(function() {
    console.log("you clicked send to r");
});



$('#mytable').on('click', "tbody tr", function() {
        console.log("you clicked and text is " + $(this).text());

        var classList =$(this).attr('class').split(/\s+/);
        console.log("before, classes are: " + classList);

        /*
        if (include(classList, "even")) {
            $(this).toggleClass("tr.even.row_selected");
        } else {
            $(this).toggleClass("tr.odd.row_selected");
        }
        */


        $(this).toggleClass('row_selected');
        classList =$(this).attr('class').split(/\s+/);
        console.log("after, classes are: " + classList);

    } );


} );

