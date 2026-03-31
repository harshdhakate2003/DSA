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



// function first(arr,count)
// {
//     let ans=[]

//     if(count==undefined)
//     {
//         return arr[0]
//     }
//     else{

//         let end;

//         if(count>arr.length)
//         {
//             end=arr.length
//         }
//         else{
//             end=count
//         }

//         for(let i=0;i<=end-1;i++)
//         {
//             ans.push(arr[i])
//         }

//         return ans

//     }
// }
// console.log(first([7,1,2,6,4,6],2 ))


//---------------------------------------------------------------------------------------

// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]



// function last(arr,count)
// {
//     let ans=[]

//     if(count==undefined)
//     {
//         return arr[arr.length-1]
//     }
//     else{
//         let start;

//         if(count>arr.length)
//         {
//             start=0
//         }
//         else{
//             start=arr.length-count
//         }

//         for(let i=start;i<=arr.length-1;i++)
//         {
//             ans.push(arr[i])
//         } 
        
//         return ans

//     }
// }
// console.log(last([1,2,3,4,5,6],8))



//-----------------------------More-Questions--------------------------------

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"


// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.


// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8