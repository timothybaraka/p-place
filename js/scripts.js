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

    $("#button21").click(function () {
        alert("your delivery price is 200 shillings");
        var pay=document.getElementById("totalprice").value;
        var totalPay=parseInt(pay)+200;
        alert("Total amount payable is "+ totalPay);
    });

    $("#button22").click(function () {
        alert("your delivery price is 200 shillings");

    });

    $("#button23").click(function () {
        alert("your delivery price is 200 shillings");
    });



});

function totalPrice11() {
    var selectedSize = document.getElementById("type")
    var CostOfSize = selectedSize.options[selectedSize.selectedIndex].value;
    var selectedCrust = document.getElementById("crusts")
    var CostOfCrust = selectedCrust.options[selectedCrust.selectedIndex].value;
    var selectedTopping = document.getElementById("toppings")
    var CostOfToppings = selectedTopping.options[selectedTopping.selectedIndex].value;
    var QuantityOfPizza = document.getElementById("pizzaquantity").value;

    price = parseInt(CostOfSize) + parseInt(CostOfCrust) + parseInt(CostOfToppings)
    totalPrice = price * parseInt(QuantityOfPizza);
    document.getElementById("totalprice").value = totalPrice;
    event.preventDefault();
};

function totalprice12() {
    var selectSize = document.getElementById("type2")
    var CostSize = selectSize.options[selectSize.selectedIndex].value;
    var selectCrust = document.getElementById("crusts2")
    var CostCrust = selectCrust.options[selectCrust.selectedIndex].value;
    var selectTopping = document.getElementById("toppings2")
    var CostToppings = selectTopping.options[selectTopping.selectedIndex].value;
    var QuantityPizza = document.getElementById("pizzaquantity2").value;

    price = parseInt(CostSize) + parseInt(CostCrust) + parseInt(CostToppings)
    totalPrice = price * parseInt(QuantityPizza);
    document.getElementById("totalprice2").value = totalPrice;
    event.preventDefault();
};

function totalprice13() {
    var sizeSelect = document.getElementById("type3")
    var SizeCost = sizeSelect.options[sizeSelect.selectedIndex].value;
    var crustSelect = document.getElementById("crusts3")
    var CrustCost = crustSelect.options[crustSelect.selectedIndex].value;
    var toppingSelect = document.getElementById("toppings3")
    var ToppingsCost = toppingSelect.options[toppingSelect.selectedIndex].value;
    var PizzaQuantity = document.getElementById("pizzaquantity3").value;


    price = parseInt(SizeCost) + parseInt(CrustCost) + parseInt(ToppingsCost)
    totalPrice = price * parseInt(PizzaQuantity);
    document.getElementById("totalprice3").value = totalPrice;
    event.preventDefault();
};