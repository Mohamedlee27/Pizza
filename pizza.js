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
