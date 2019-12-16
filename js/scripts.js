$(document).ready(){
    $(#pizzalarge).click(function(){
        $(.formlarge).hide();
        $(#pizzalarge).toggle();
        $(.formlarge).show();
    });

};
alert("yoooo");
function totalPrice(){
    var selectedCrust=document.getElementById("crusts")
    var CostOfCrust=selectedCrust.options[selectedCrust.selectedIndex].value;
    var selectedTopping=document.getElementById("toppings");
    var CostOfTopping=selectedTopping.options[selectedTopping.selectedIndex].value;
    var selectedpizzaquant=document.getElementById("pizzaquantity").value;

    var price=parseInt(CostOfCrust)+parseInt(CostOfTopping);
    alert(CostOfCrust);
}


