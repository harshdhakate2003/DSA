// 28. Write a JavaScript function to find the longest common starting substring in a set of strings.
// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"

// function longest_common_starting_substring(arr)
// {
//     let ans=""
//     first=arr[0]

//     for(let i=0;i<first.length;i++)
//     {
//         let ch=first[i]

//         for(let j=0;j<arr.length;j++)
//         {
//             if(arr[j][i]!=ch)
//             {
//                 console.log(ans)
//                 return
//             }
//         }
//         ans+=first[i]
//     }
// }
// longest_common_starting_substring(['apple','app','application'])


//------------------------------------------------------------------------------
// 31. Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]


// function remove(arr,el){
//     let j
//     for(let i=0;i<=arr.length-1;i++)
//     {
//             if(arr[i]==el)
//             {
//                 j=i
//                 break
//             }
//     }

//     if(j==undefined)
//     {
//         console.log(arr)
//         return
//     }

//     for(let k=j;k<=arr.length-1;k++)
//     {
//         arr[k]=arr[k+1]
//     }
//     arr.pop()

//     console.log(arr)
// }
// remove([2, 5, 9, 6], 5)


//------------------------------------------------------------------------------
// 32. Write a JavaScript function to find an array containing a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]


// function contains(arr,el)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==el)
//         {
//             console.log(true)
//             return
//         }
//     }

//     console.log(false)
// }
// contains([2, 5, 9, 6], 5)



// function contains(arr,el)
// {
//     if(arr.includes(el))
//     {
//         console.log(true)
//         return
//     }
//     else{
//         console.log(false)
//     }
// }
// contains([2, 5, 9, 6], 5)