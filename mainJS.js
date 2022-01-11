$(document).ready(function(){
    console.log("JS connected")
    $("#add_row").on("click", function() {
        console.log("button clicked")
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
    
        $.each($("#table1 tbody tr:nth(0) td"), function(){
            var cur_td = $(this);
        
            var children = cur_td.children();
        
            if ($(this).data("name") != undefined) { 
                var td = $("<td></td>", {
                    "data-name": $(cur_td).data("name")
                });
                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("name", $(cur_td).data("name") + newid);
                c.appendTo($(td));
                td.appendTo($(tr));
            }
            else
            {
                var td = $("<td></td>", {
                    'text': $('#table1 tr').length
                }).appendTo($(tr));
            }
        });
    
        $(tr).appendTo($('#table1'));
    
        $(tr).find("td button.row-remove").on("click", function() {
            $(this).closest("tr").remove();
        })
    });

    $("#add_row").trigger("click");
});
