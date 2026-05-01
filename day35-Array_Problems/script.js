// 33. Write a JavaScript  script to empty an array while keeping the original.

// function empty(arr){
//     while(arr.length > 0){
//         arr.pop()
//     }
//     console.log(arr)
// }
// empty(["apple", "banana", "mango"])

//----------------------------------------------------------------------------
// 34. Write a JavaScript function to get the nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89


// function lar(arr,n)
// {
//     arr.sort(function(a,b){
//         return b-a
//     })
//     console.log(arr)
//     console.log(arr[n-1]);
// }
// lar([43, 56, 23, 89, 88, 90, 99, 652], 4)


//----------------------------------------------------------------------------
// 35. Write a JavaScript function to get random items from an array.

let arr=[1,2,3,4,5,6,7,8,9]

function getRandom(min, max)
{
    return Math.floor( Math.random() * (max - min) + min)
}

function get(arr){
    let min=0
    let max=arr.length

    let r = getRandom(min,max)
    console.log(arr[r])
}
get(arr)