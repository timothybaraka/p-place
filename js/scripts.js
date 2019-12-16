$(document).ready(function(){
    $("#pizzalarge").click(function(){
    $(".formlarge").hide();
    $("#pizzalarge").toggle();
    $(".formlarge").show();
    });
    
    $("#pizzamedium").on("click", function(){
        $(".formmedium").hide();
        $("#pizzamedium").toggle();
        $(".formmedium").show();
        });

        $("#pizzasmall").on("click", function(){
            $(".formsmall").hide();
            $("#pizzasmall").toggle();
            $(".formsmall").show();
            }); 
});

function totalPrice(){
    var selectedCrust=document.getElementById("crusts")
    var CostOfCrust=selectedCrust.options[selectedCrust.selectedIndex].value;
    var selectedTopping=document.getElementById("toppings");
    var CostOfTopping=selectedTopping.options[selectedTopping.selectedIndex].value;
    var selectedpizzaquant=document.getElementById("pizzaquantity").value;
    
    var price=parseInt(CostOfCrust)+parseInt(CostOfTopping);
    alert(CostOfCrust);
    }