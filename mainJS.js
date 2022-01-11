$(document).ready( function(){

    var newid = 0;
    $.each($("#table1 tr"), function() {
        if (parseInt($(this).data("id")) > newid)
        {
            newid = parseInt($(this).data("id"));
        }
    });
    newid++;

    var tr = $("<tr></tr>", {
        id: "addr"+newid,
        "data-id": newid
    });




})