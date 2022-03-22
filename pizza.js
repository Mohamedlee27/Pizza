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

let small = new PizzaSize("Small", 300);
let medium = new PizzaSize("Medium", 500);
let large = new PizzaSize("Large", 1000);

let stuffed = new PizzaCrust("Stuffed", 150);
let crispy = new PizzaCrust("Crispy", 300);
let glutten = new PizzaCrust("Glutten-free", 120);