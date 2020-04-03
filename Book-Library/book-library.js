
$(document).ready(function(){
    $(".delete").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        })
    });

    $(".readcheck").click(function(){
        if($(this).prop("checked") == true) {
            $(this).siblings().css("background-color","green");
            $(this).siblings().html("Read");
        }
        else if ($(this).prop("checked") == false) {
            $(this).siblings().css("background-color","red");
            $(this).siblings().html("Not Read");
        }
    });

    $("#addrow").click(function(){
        var genre = $("#genre").val();
        var bookTitle = $("#title").val();
        var bookAuthor = $("#author").val();
        var pageNum = $("#pages").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + genre +"</td><td>" + bookTitle + "</td><td>" + bookAuthor + "</td><td>" + pageNum + "</td></tr>";
        $("table tbody").append(markup);
    });

})



