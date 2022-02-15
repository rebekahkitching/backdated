//Create a stopwatch object that has four properties and three methods

let stopWatch = {}

stopWatch.brand = 'adidas'
stopWatch.color = 'black'
stopWatch.shape = 'round'
stopWatch.size = 'medium'

stopWatch.start = function (){
    console.log('STARTING')
}
stopWatch.stop = function (){
    console.log('STOPPING')
}

stopWatch.sayBrand = function (){
    console.log(stopWatch.brand)
}