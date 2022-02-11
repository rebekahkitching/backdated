//Create an array of movie titles. 
// Loop through the array and each element to the h2.
let movies = ['Book Thief', 'Gone Girl', 'Kujo']
for(let index = 0; index < movies.length; index = index + 1){
    document.querySelector('h2').innerText += movies[index]
}

//Create an array of numbers. 
// Loop through the array and three to each number and replace the old number.
let nums = [3,16,30]

nums.forEach((item,index) => {
    nums[index] = item + 3; 
})

//Find the average of all the numbers from question three
let sum = 0
for(let index = 0; index < nums.length; index = index + 1){
    sum += nums[index];
}