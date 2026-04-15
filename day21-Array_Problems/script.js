// Write a JavaScript program to find the leap years in a given range of years.

// start_year=2000
// end_year=2050
// let leap=[]

// function isleap(year){
//     if(year%400==0 || (year%4==0 && year%100 != 0) )
//     {
//         return true
//     }
//     else{
//         return false
//     }
// }

// for(let i=start_year;i<=end_year;i++)
// {
//     if(isleap(i))
//     {
//         leap.push(i)
//     }
// }

// console.log(leap)


//--------------------------------------------------------------------------------------
// Use random function to get random values

// let abc=Math.floor(Math.random()*1000)
// console.log(abc)

//--------------------------------------------------------------------------------------
// Write a JavaScript program to shuffle an array.

// function getRandom(min, max)
// {
//     return Math.floor( Math.random() * (max - min) + min)
// }


// function makeArrRandom(arr)
// {
//     let min=0
//     let max=arr.length-1

//     for(let i=0;i<=arr.length-1;i++)
//     {
//         let random=getRandom(min,max)

//         let temp=arr[i]
//         arr[i]=arr[random]
//         arr[random]=temp

//         let a=arr.pop()
//         arr.unshift(a)
//     }

//     console.log(arr)
// }

// makeArrRandom([1,2,3,4,5,6])


//--------------------------------------------------------------------------------------
// Write a JavaScript program to auto generate password. OR
// Write a JavaScript program to auto generate captcha.

// function getRandom(min, max)
// {
//     return Math.floor( Math.random() * (max - min) + min)
// }


// let password=""
// let ch=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9]


// function makeArrRandom(arr)
// {
//     let min=0
//     let max=arr.length-1

//     for(let i=0;i<=arr.length-1;i++)
//     {
//         let random=getRandom(min,max)

//         let temp=arr[i]
//         arr[i]=arr[random]
//         arr[random]=temp

//         let a=arr.pop()
//         arr.unshift(a)
//     }

//     for(let j=1;j<=6;j++)
//     {
//         if(j%2==0 && !(arr[j]>=0 && arr[j]<=9))
//         {
//             password=password+(arr[j].toUpperCase())
//         }else{
//             password=password+arr[j]
//         }
//     }

//     console.log(password)

// }

// makeArrRandom(ch)



//--------------------------------More Questions----------------------------------------------

// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// 23. Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]



