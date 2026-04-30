// Question 1 – Longest Alternating Subarray 
// Given an array, find the length of the longest contiguous subarray where numbers alternate between even and odd.
// Test Case
// Input:
// [5, 10, 3, 8, 7, 6, 9]
// Output:
// 7


// let arr=[2,15,6,5,8,6,9,2,7,8,21,8,41,5]
// let long=[]
// let longLength=0
// let p1=0
// let p2=p1+1
// let sub=[]

// while(p2<arr.length){
//     if((arr[p1]%2==0 && arr[p2]%2!=0))
//     { 
//         sub.push(arr[p1])
//     }
//     else if((arr[p1]%2!=0 && arr[p2]%2==0))
//     {
//        sub.push(arr[p1]) 
//     }
//     else
//     {
//         sub.push(arr[p1])
//         if(sub.length>long.length)
//         {
//             long=sub
//             longLength=long.length
//             sub=[]
//         }
//     }
     
//     p1++
//     p2=p1+1
//     console.log(sub)
// }
// console.log(long)


//--------------------------------------------------------------------------

// Question 2 – First Repeating Element Index 
// Find the index of the first element that appears more than once in an array.
// If no repeating element exists, print -1.
// Test Case
// Input:
// [4, 5, 1, 2, 5, 3, 1]
// Output:
// 1


// function abc(arr)
// {
//     let p1=0
//     let p2=p1+1

//     while(p1<=arr.length-2)
//     {
//         while(p2<=arr.length-1)
//         {
//             if(arr[p1]==arr[p2])
//             {
//                 return p1
//             }
//             p2++
//         }

//         if(p1==arr.length-2)
//         {
//             return -1
//         }

//         p1++
//         p2=p1+1
//     }
// }

// console.log(abc([4, 5, 1, 2, 5, 3, 1]))



//--------------------------------------------------------------------------


// Question 3 – Equilibrium Index 
// Find the index where the sum of elements on the left equals the sum on the right.
// Test Case
// Input:
// [3, 4, 8, -9, 20, 6]
// Output:
// 4


// let arr=[3, 4, 8, -9, 20, 6]

// for(let i=0;i<=arr.length-1;i++)
// {
//     let lsum=0
//     let rsum=0

//     for(let k=0;k<i;k++)
//     {
//         lsum=lsum+arr[k]
//     }

//     for(let j=i+1;j<=arr.length-1;j++)
//     {
//         rsum=rsum+arr[j]
//     }

//     if(lsum==rsum)
//     {
//         console.log(i)
//         break
//     }
// }


//--------------------------------------------------------------------------

// Question 4 – Matrix Boundary Traversal 
// Print only the boundary elements of a 2D matrix in clockwise order.
// Test Case
// Input:
// [
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12],
//  [13,14,15,16]
// ]
// Output:
// 1 2 3 4 8 12 16 15 14 13 9 5



// let arr=[
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12],
//  [13,14,15,16]
// ]

// let str=""

// rowstart=0
// colstart=0
// colend=arr[0].length-1
// while(colstart<=colend)
// {
//     str=str+arr[rowstart][colstart]+" "
//     colstart++
// }

// rowstart=1
// rowend=arr.length-1
// colstart=arr[rowstart].length-1
// while(rowstart<=rowend)
// {
//     str=str+arr[rowstart][colstart]+" "
//     rowstart++
// }

// rowstart=arr.length-1
// colstart=arr[rowstart].length-2
// colend=0
// while(colstart>=colend)
// {
//     str=str+arr[rowstart][colstart]+" "
//     colstart--
// }

// rowstart=arr.length-2
// rowend=1
// colstart=0
// while(rowstart>=rowend)
// {
//     str=str+arr[rowstart][colstart]+" "
//     rowstart--
// }

// console.log(str)


//--------------------------------------------------------------------------


// Question 5 – Row with Minimum Non-Zero Elements 
// Find the row index that contains the minimum number of non-zero elements.
// Test Case
// Input:
// [
//  [1, 0, 0],
//  [0, 0, 0],
//  [2, 3, 0]
// ]
// Output:
// 1


let arr=[
 [1, 0, 0],
 [0, 0, 0],
 [2, 3, 0]
]

let prev=0
let now=0
let index


for(let i=0;i<=arr.length-1;i++)
{
    let cur=0
    for(let k=0;k<=arr[i].length-1;k++)
    {
        if(arr[i][k]==0)
        {
            cur++
        }
    }

    if(cur>prev)
    {
        prev=cur
        index=i
    }
}

console.log(`minimum non zero index ${index} , total zeros are ${prev}`)

