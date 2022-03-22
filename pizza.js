function PizzaSize(size, price){
    this.size = size;
    this.price = price;
}

function PizzaCrust(crust, price){
    this.crust = crust;
    this.price = price;
}

function PizzaTopping(topping, price){
    this.topping = topping;
    this.price = price;
}
let orderNumber = 0;

let small = new PizzaSize("Small", 300);
let medium = new PizzaSize("Medium", 500);
let large = new PizzaSize("Large", 1000);

let stuffed = new PizzaCrust("Stuffed", 150);
let crispy = new PizzaCrust("Crispy", 300);
let glutten = new PizzaCrust("Glutten-free", 120);

let pepporoni = new PizzaTopping("Pepporoni", 50);
let mushroom = new PizzaTopping("Mushroom", 100);
let bacon = new PizzaTopping("Bacon", 150);

$(document).ready(function(){
    $("#order-button").click(function(event){
        orderNumber += 1;
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();

        let sizeSummary = "";
        let crustSummary = "";
        let toppingSummarry = "";

        let sizeTotal = 0;
        let crustTotal = 0;
        let toppingTotal = 0;

        let sizes = [small, medium, large];
        let crusts = [stuffed, crispy, glutten];
        let toppings = [pepporoni, mushroom, bacon];

        for (let i = 0; i < sizes.length; i++){
            if (pizzaSize === sizes[i].size){
                sizeTotal += sizes[i].price;
                sizeSummary = sizes[i].price;
            }
        }

        for (let i = 0; i < crusts.length; i++){
            if(pizzaCrust === crusts[i].crust){
                crustTotal += crusts[i].price;
                crustSummary = crusts[i].price;
            }
        }

      
        for (let i = 0; i < toppings.length; i++){
            if(pizzaTopping === toppings[i].topping){
                toppingTotal += toppings[i].price;
                toppingSummarry = toppings[i].price;
            }
        }

        let total = sizeTotal + crustTotal + toppingTotal;
        console.log(total);
        $(".summary").show();
        $(".order-button").hide();
        $("#pizza-size").html($("#size option:selected").text() + " - " + sizeTotal);
        $("#pizza-crusts").html($("#crusts option:selected").text() + " - " + crustTotal);
        $("#pizza-topping").html($("#toppings option:selected").text() + " - " + toppingTotal);
        $("#total").html(total);
        
    })
    $("#order-add").click(function(event){
       
        orderNumber += 1;
     
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();

       
        let sizes = [small, medium, large];
        let crusts = [stuffed, crispy, glutten];
        let toppings = [pepporoni, mushroom, bacon];

        let sizeSummary = "";
        let crustSummary = "";
        let toppingSummarry = "";


        let sizeTotal = 0;
        let crustTotal = 0;
        let toppingTotal = 0;

        for (let i = 0; i < sizes.length; i++){
            if (pizzaSize === sizes[i].size){
                sizeTotal += sizes[i].price;
                sizeSummary = sizes[i].price;
            }
        }


        for (let i = 0; i < crusts.length; i++){
            if(pizzaCrust === crusts[i].crust){
                crustTotal += crusts[i].price;
                crustSummary = crusts[i].price;
            }
        }

       
        for (let i = 0; i < toppings.length; i++){
            if(pizzaTopping === toppings[i].topping){
                toppingTotal += toppings[i].price;
                toppingSummarry = toppings[i].price;
            }
        }

        let total = sizeTotal + crustTotal + toppingTotal;
        console.log(total);
        $(".summary").show();
        $(".order-button").hide();
        $("#pizza-size").html($("#size option:selected").text() + " - " + sizeTotal);
        $("#pizza-crusts").html($("#crusts option:selected").text() + " - " + crustTotal);
        $("#pizza-topping").html($("#toppings option:selected").text() + " - " + toppingTotal);
        $("#total").html(total);

        let tableRow = '<tr><th scope="row">' + orderNumber + '</th><td id="pizza-size">' + $("#size option:selected").text() + '---' + sizeSummary + '</td><td id="pizza-topping">' + $("#toppings option:selected").text() + '---' + toppingSummarry + '</td><td id="pizza-crusts">' + $("#crusts option:selected").text() + '---' + crustSummary + '</td><td id="total">' + total + '</td></tr>';
        $(".output").append(tableRow);
    })

    $("#checkout").click(function(event){
        let confirmation = confirm("Confirmed! Do you want your order to be delivered? Kenyan Shillings 250 will be charged.");
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();

        let sizes = [small, medium, large];
        let crusts = [stuffed, crispy, glutten];
        let toppings = [pepporoni, mushroom, bacon];

        let sizeTotal = 0;
        let crustTotal = 0;
        let toppingTotal = 0;
        for (let i = 0; i < sizes.length; i++){
            if (pizzaSize === sizes[i].size){
                sizeTotal += sizes[i].price;
            }
        }
        for (let i = 0; i < crusts.length; i++){
            if(pizzaCrust === crusts[i].crust){
                crustTotal += crusts[i].price;
            }
        }
        for (let i = 0; i < toppings.length; i++){
            if(pizzaTopping === toppings[i].topping){
                toppingTotal += toppings[i].price;
            }
        }

        let total = sizeTotal + crustTotal + toppingTotal;
        let grandTotal = total * orderNumber;
        if (confirmation){
            $("#grandTotal").html("Your Total is " + (grandTotal += 250) + " Thank you and enjoy");
        }
        else {
            ("#grandTotal").html("Your Total is " + (grandTotal) + " Thank you and enjoy");
        }
        $(".add-another-order").hide();
    })
})