// Makeing the clone of the array using variable
// It is not proper way to make a clone of the array


// let arr1=[12,14,15,6,18,95,4]

// // will not make a true copy
// let arr2=arr1

// console.log("arr1 - "+ arr1 )
// console.log("arr2 - "+ arr2 )

// arr2[2]="aplha"

// console.log("arr1 - "+ arr1 )
// console.log("arr2 - "+ arr2 )

//------------------------------------------------------------------
// Make a clone of array

// let arr1=[12,45,89,62,45,52]
// let clone=[]

// for(let i=0;i<=arr1.length-1;i++)
// {
//     clone[i]=arr1[i]
// }

// console.log(arr1)
// console.log(clone)

// clone[2]="changed"

// console.log(arr1)
// console.log(clone)

//------------------------------------------------------------------

// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// [1, 2, 4, 0]

// function array_Clone(arr)
// {
//     let copy=[]

//     for(let i=0;i<=arr.length-1;i++)
//     {
//         copy[i]=arr[i]
//     }

//     return copy
// }

// let clone1=array_Clone([1,2,3,4,5,6,7])

// console.log(clone1)



//------------------------------------------------------------------
// write a function that will return reverse of an array

// function rev_Arr(arr)
// {
//     let rev=[]
//     let j=0
//     for(let i=arr.length-1;i>=0;i--)
//     {
//         rev[j]=arr[i]
//         j++
//     }

//     return rev
// }

// let rev1=rev_Arr([1,2,3,4,5,6])

// console.log(rev1)



//------------------------------------------------------------------
//------------------More questions---------------------------------

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []



// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]