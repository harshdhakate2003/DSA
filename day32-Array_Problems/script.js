// PROBLEM 1 – Longest Subarray with Equal 0s and 1s
// Given a binary array, find the length of the longest subarray with equal number of 0s and 1s.
// Input
// [0, 1, 0, 1, 1, 1, 0]
// Output
// 4
// Explanation
// [0,1,0,1] has equal 0s and 1s.
// Constraint
// Time complexity should be O(n)


// function count(arr)
// {
//     let sub=[]
//     let zero=0
//     let one=0
//     let eqlInd

//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==0){
//             zero++
//         }
//         else if(arr[i]==1)
//         {
//             one++
//         }

//         if(zero==one){
//             eqlInd=i
//         }
//     }

//     for(let i=0;i<=eqlInd;i++)
//     {
//         sub.push(arr[i])
//     }

//     console.log(sub)
//     console.log(sub.length)
// }
// count([0, 1, 0, 1, 1, 1, 0])

//-----------------------------------------------------------------------------------

// PROBLEM 2 – Product of Array Except Self
// Given an array, return a new array where each element is the product of all elements except itself.
// Do not use division.
// Input
// [1, 2, 3, 4]
// Output
// [24, 12, 8, 6]
// Constraint
// O(n) time, O(1) extra space (excluding output array)


// function demo(arr)
// {
//     let result=[]

//     for(let i=0;i<=arr.length-1;i++)
//     {
//         let mul=1
//         let p=0
//         while(p<arr.length)
//         {
//             if(p!=i)
//             {
//                 mul=mul*arr[p]
//             }
//             p++
//         }
//         result.push(mul)
//     }
//     console.log(result)
// }
// demo([1, 2, 3, 4])


//-----------------------------------------------------------------------------------

// PROBLEM 3 – Count Inversion Pairs (Nested Loop Optimization)
// An inversion is a pair (i, j) such that i < j and arr[i] > arr[j].
// Input
// [8, 4, 2, 1]
// Output
// 6
// Explanation
// (8,4), (8,2), (8,1), (4,2), (4,1), (2,1)
// Challenge
// Optimize better than O(n²)


// function inversion(arr)
// {
//     let count=0
//     for(let i=0;i<=arr.length-2;i++)
//     {
//         for(let j=i+1;j<=arr.length-1;j++)
//         {
//             if(i<j & arr[i]>arr[j])
//             {
//                 count++
//             }
//         }
//     }
//     console.log(count)
// }
// inversion([8, 4, 2, 1])


//-----------------------------------------------------------------------------------
// PROBLEM 4 – Majority Element (Boyer–Moore)
// Find the element that appears more than n/2 times.
// Input
// [2,2,1,1,2,2,2]
// Output
// 2
// Constraint
// O(n) time, O(1) space


// let arr=[2,2,1,1,2,2,2]
// let obj={}
// for(let i=0;i<=arr.length-1;i++)
// {
//     if(obj[arr[i]]==undefined)
//     {
//         obj[arr[i]]=1
//     }
//     else{
//         obj[arr[i]]+=1
//     }
// }

// for(let alpha in obj)
// {
//     if(obj[alpha]>arr.length/2)
//     {
//         console.log(alpha)
//     }
// }

//-----------------------------------------------------------------------------------
// PROBLEM 5 – Rotate Matrix 90 Degrees (In-place)
// Rotate square matrix by 90° clockwise without using extra matrix.
// Input
// [[1,2,3],
// [4,5,6],
// [7,8,9]]
// Output
// [[7,4,1],
// [8,5,2],
// [9,6,3]]
// Constraint
// In-place rotation only.


// let replace=[]
// let arr=[[1,2,3],
//         [4,5,6],
//         [7,8,9]]


// for(let i=0;i<=arr.length-1;i++)
// {
//     for(let j=arr.length-1;j>=0;j--)
//     {
//         replace.push(arr[j][i])
//     }
// }

// let ind=0
// for(let i=0;i<=arr.length-1;i++)
// {
//     for(let j=0;j<=arr[i].length-1;j++)
//     {
//         arr[i][j]=replace[ind]
//         ind++
//     }
// }

// console.log(arr)


//-----------------------------------------------------------------------------------
// PROBLEM 6 – Subarray with Given Sum (Positive + Negative Numbers)
// Given array and target sum, return start and end index of subarray whose sum equals target.
// Input
// arr = [10, 2, -2, -20, 10]
// target = -10
// Output
// [0, 3]
// Constraint
// O(n) solution required.


// function demo(arr,tar)
// {
//     let ans=[]
//     for(let i=0;i<=arr.length-2;i++)
//     {
//         let sum=0
//         let p1=i+1
//         while(p1<=arr.length-1)
//         {
//             sum=arr[i]+arr[p1]
//             if(sum==tar)
//             {
//                 ans.push(i)
//                 ans.push(p1)
//                 console.log(ans)
//                 return
//             }
//             p1++
//         }
//     }
// }
// demo([10, 2, -2, -20, 10],-10)

//-----------------------------------------------------------------------------------
// PROBLEM 7 – Deep Object Comparison
// Write a function that checks whether two nested objects are deeply equal.
// Input
// obj1 = {a:1, b:{c:2}}
// obj2 = {a:1, b:{c:2}}
// Output
// true
// Test Case
// {a:1, b:{c:2}}
// {a:1, b:{c:3}}
// Output
// false

















//-----------------------------------------------------------------------------------
// PROBLEM 8 – Longest Consecutive Sequence
// Given unsorted array, find length of longest consecutive sequence.
// Input
// [100, 4, 200, 1, 3, 2]
// Output
// 4
// Explanation
// Sequence is 1,2,3,4
// Constraint
// O(n) time


// function longConse(arr)
// {
//     arr.sort(function(a,b){
//         return a-b
//     })

//     let lsa=[]
//     let sub=[]
//     let p1=0
//     let p2=p1+1
//     while(p1<=arr.length-2)
//     {
//         if(arr[p1]+1==arr[p2])
//         {
//             sub.push(arr[p1])
//         }
//         else{
//             sub.push(arr[p1])
//             if(sub.length>lsa.length)
//             {
//                 lsa=sub
//                 sub=[]
//             }
//         }
//         p1++
//         p2++
//     }
//     console.log(lsa)
//     console.log(lsa.length);
// }
// longConse([100, 4, 200, 1, 3, 2])


//-----------------------------------------------------------------------------------
// PROBLEM 9 – Minimum Window Substring
// Given two strings s and t, return the minimum window of s that contains all characters of t.
// Input
// s = "ADOBECODEBANC"
// t = "ABC"
// Output
// "BANC"
// Constraint
// Sliding window optimization required.


// let s = "ADOBECODEBANC"
// let t = "ABC"
// let small=[]

// for(let i=0;i<=s.length-1;i++)
// {
//     sub=[]
//     for(let p=i;p<=s.length-1;p++)
//     {
//         sub.push(s[p])
//         let flag=true
        
//         for(let j=0;j<=t.length-1;j++)
//         {
//             if(!(sub.includes(t[j])))
//             {
//                 flag=false
//                 break
//             }
//         }

//         if(flag)
//         {
//             if(small.length==0 || small.length>sub.length)
//             {
//                 small=sub
//             }
//             break  
//         }
//     }
// }
// let str=""
// for(let i=0;i<=small.length-1;i++)
// {
//     str=str+small[i]
// }
// console.log(str)


//-----------------------------------------------------------------------------------
// PROBLEM 10 – Flatten Deeply Nested Array
// Flatten array of any depth without using built-in flat().
// Input
// [1, [2, [3, [4]], 5]]
// Output
// [1, 2, 3, 4, 5]
// Constraint
// Handle infinite nesting depth.

// let arr=[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]], 11, [12, 13]]
// let ans=[]

// function demo(arr){
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i].length==undefined)
//         {
//             ans.push(arr[i])
//         }
//         else if(arr[i].length!=undefined)
//         {
//             demo(arr[i])
//         }
//     }
// }
// demo(arr)
// console.log(ans)



let arr=[1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]], 11, [12, 13]]
let flat
let Change 

do{
    flat = []
    Change = false
    for(let i=0 ; i<=arr.length-1 ;i++)
    {
         let len = arr[i].length
         if(len == undefined)
         {
             flat.push(arr[i])
         }else{
            Change = true
            let a = 0
            while(a <= len-1)
            {
                flat.push(arr[i][a])
                a++
            }
         }
    }
    arr = flat    
}while(Change);

console.log(arr);
