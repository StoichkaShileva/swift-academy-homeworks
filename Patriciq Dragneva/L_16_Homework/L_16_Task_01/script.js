/* global document */

(function () {
    "use strict";


    function display(text) {
        var output = document.createElement("pre");
        output.textContent = text;
        document.body.appendChild(output);
    }



    /* FIRST TASK FROM LESSON 16 */
    var shoppingCart = [
        {
            name: "apple",
            type: "fruit",
            quantity: 5
        },
        {
            name: "banana",
            type: "fruit",
            quantity: 2
        },
        {
            name: "potato",
            type: "vegetable",
            quantity: 10
        },
        {
            name: "cheese",
            type: "diry",
            quantity: 1
        },
        {
            name: "yogurt",
            type: "diry",
            quantity: 3
        },
        {
            name: "steak",
            type: "meat",
            quantity: 1
        },
        {
            name: "ice cream",
            type: "sweet",
            quantity: 1
        },
        {
            name: "bounty",
            type: "sweet",
            quantity: 3
        }
    ];
    
    var total = 0;
    var i;
    
    // This function accepts a shopping cart list and returns the overall quantity of all the items in it
    function quantity(shoppingCart) { 
        for(i = 0; i < shoppingCart.length; i++){
            var item = shoppingCart[i];
            total = total + item.quantity;
        }
        return total;
    }

    // This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
    function veganQuantity(shoppingCart) { 
        for(i = 0; i < shoppingCart.length; i++){
            var item = shoppingCart[i];
            if(item.type === "fruit" || item.type === "vegetable"){
                total = total + item.quantity;
            }
        }
        return total;
    }

    display('The overall quantity of all the\nitems in the shoppingCart is:\t\t\t'+ quantity(shoppingCart)); // should return 26
    display('The quantity of the fruit\nand vegetable items in the shoppingCart is:\t'+ veganQuantity(shoppingCart)); // should return 17


})();
