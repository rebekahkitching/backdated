//Create a pizza object that has four properties and three methods


let pizza = {}

pizza.size = 'large'
pizza.toppings = ['salami','pineapple','bacon']
pizza.crust = 'thin crust'
pizza.sauce = 'light'

pizza.estimatedDeliveryTime = function (){
    console.log('6:30pm')
}
pizza.burnMouth = function (){
    console.log('owww')
}
pizza.frisbee = function(){
    console.log('yeet')
}