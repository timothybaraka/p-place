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

function totalPrice(){
    var selectedSize = document.getElementById("type")
    var CostOfSize = selectedSize.options[selectedSize.selectedIndex].value;
  var selectedCrust = document.getElementById("crusts")
  var CostOfCrust = selectedCrust.options[selectedCrust.selectedIndex].value;
  var selectedTopping = document.getElementById("toppings")
  var CostOfToppings = selectedTopping.options[selectedCrust.selectedIndex].value;
  var QuantityOfPizza = document.getElementById("pizzaquantity").value;

  
  price = parseInt(CostOfSize) + parseInt(CostOfCrust) + parseInt(CostOfToppings)
  totalPrice = price * parseInt(QuantityOfPizza);
  document.getElementById("totalprice").value = totalPrice;
  event.preventDefault();
};  






