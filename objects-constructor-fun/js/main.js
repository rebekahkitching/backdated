//Create a constructor with 4 properties and 3 methods

function PizzaMachine(size,toppings,crust,sauce){
    this.size = size 
    this.toppings = toppings 
    this.crust = crust
    this.sauce = sauce 
    this.estimatedDeliveryTime = function(){
        console.log('6:30pm')
    }
    this.burnmouth = function (){
        console.log('owww')
    }
    this.frisbee = function (){
        console.log('yeet')
    }
}
let pizza = new PizzaMachine('large',['pineapple','ham'],'thin', 'light')

