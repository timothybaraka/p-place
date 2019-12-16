$(document).ready(function () {
    $("#pizzalarge").click(function () {
        $(".formlarge").hide();
        $("#pizzalarge").toggle();
        $(".formlarge").show();
    });

    $("#pizzamedium").on("click", function () {
        $(".formmedium").hide();
        $("#pizzamedium").toggle();
        $(".formmedium").show();
    });

    $("#pizzasmall").on("click", function () {
        $(".formsmall").hide();
        $("#pizzasmall").toggle();
        $(".formsmall").show();
    });
    $("#button1").click(function () {
        alert(selectedSize);
    });

});




