$("#accordion").on("hidden.bs.collapse", function (e) {
        $(e.target).closest(".panel-primary")
            .find(".panel-heading span")
            .removeClass("glyphicon glyphicon-minus")
            .addClass("glyphicon glyphicon-plus");
    });
    $("#accordion").on("shown.bs.collapse", function (e) {
        $(e.target).closest(".panel-primary")
            .find(".panel-heading span")
            .removeClass("glyphicon glyphicon-plus")
            .addClass("glyphicon glyphicon-minus");
    });